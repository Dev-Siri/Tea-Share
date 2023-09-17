use crate::{config, utils::messages};
use std::{
    io,
    process::{exit, Child, Command},
};

// The dev workflow runs the dev command defined in tranager.json
// It also supports parallel execution for running multiple. The reason it doesn't use Rust's
// threading api is because it kills the process since all the process are run in parallel. Instead
// it uses '&' to use bash's background job impl and run it in parallel.
// If anyone has any better and a more performant solution with Rust's multithreading API, they can contribute
// and open a PR that changes the current impl, because this, is kinda useless in rust if it could be just sh.
pub fn dev(apps: Vec<String>) {
    let mut processes: Vec<Child> = vec![];

    for app in apps {
        let config = config::get_config();
        let app_config = config::get_app_config(&app);

        let mut dev_process = Command::new("sh");
        dev_process
            .arg("-c")
            .arg(format!("{} &", app_config.commands.dev));
        dev_process.current_dir(format!("{}/{}", config.source, app));

        println!(
            "{}",
            messages::info_message(&format!("App `{}` dev environment started.", app))
        );

        let child = dev_process.spawn().expect("Failed to start process");
        processes.push(child);
    }

    println!(
        "{}",
        messages::info_message("Press `e` to exit all processes...")
    );

    let mut input = String::new();

    io::stdin()
        .read_line(&mut input)
        .expect(&messages::error_message("Failed to read line"));

    if input == "e" {
        println!("{}", messages::info_message("Shutting down..."));
        close_all_process(&mut processes);
        exit(0);
    }
}

fn close_all_process(processes: &mut Vec<Child>) {
    for process in processes {
        process
            .kill()
            .expect(&messages::error_message("Failed to kill process"));
    }
}
