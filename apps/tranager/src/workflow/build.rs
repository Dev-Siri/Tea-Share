use crate::{config, utils};
use colored::*;
use std::process::Command;

pub fn build(app: String) {
    let config = config::get_config();
    let app_config = config::get_app_config(&app);

    let mut build_process = Command::new("sh");

    build_process.arg("-c").arg(&app_config.commands.build);

    let app_dir = format!("{}/{}", config.source, app);
    build_process.current_dir(&app_dir);

    println!(
        "{}",
        utils::messages::info_message(&format!(
            "Building {} with `{}`...",
            app.bold(),
            app_config.commands.build.bold()
        ))
    );
    let output = build_process
        .output()
        .expect(&utils::messages::error_message(&format!(
            "{}",
            "Failed to build the app.".bold()
        )));
    let build_exit_code = output.status.code().expect(&utils::messages::error_message(
        "Failed to convert build command's exit code to i32.",
    ));

    if build_exit_code == 0 {
        print!(
            "{}",
            utils::messages::success_message("App built successfully.")
        );
    } else {
        print!("{}", utils::messages::error_message("Failed to build app."));
    }

    println!(" (exited with code {})", build_exit_code.to_string().bold());
}
