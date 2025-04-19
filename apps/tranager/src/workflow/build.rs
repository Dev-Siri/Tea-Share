use crate::{config, utils::messages};
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
        messages::info_message(&format!(
            "Building {} with `{}`...",
            app.bold(),
            app_config.commands.build.bold()
        ))
    );
    let output = build_process
        .output()
        .expect(&messages::error_message(&format!(
            "{}",
            "Failed to build the app.".bold()
        )));
    let build_exit_code = output.status.code().expect(&messages::error_message(
        "Failed to convert build command's exit code to i32.",
    ));

    if build_exit_code == 0 {
        print!("{}", messages::success_message("App built successfully."));
    } else {
        print!("{}", messages::error_message("Failed to build app."));
    }

    println!(" (exited with code {})", build_exit_code.to_string().bold());
}
