use colored::*;
use std::process::Command;
use crate::{core::config, utils};

pub fn build(app: String) {
  let config = config::get_config();
  let found_app = config.apps
    .into_iter()
    .filter(|app_config| app_config.name == app)
    .next()
    .ok_or(utils::messages::error_message("App was not found in the config."))
    .expect(&utils::messages::error_message("Failed to find the specified app in config."));

  let mut build_process = Command::new("sh");

  build_process.arg("-c").arg(&found_app.commands.build);

  let app_dir = format!("{}/{}", config.source, app);
  build_process.current_dir(&app_dir);

  println!("Building {} with `{}`...", app.bold(), found_app.commands.build.bold());
  let output = build_process.output()
    .expect(&format!("{} {}", "[X]".red(), "Failed to build the app.".bold()));
  let build_exit_code = output.status.code().expect(&utils::messages::error_message("Failed to convert build command's exit code to i32."));

  if build_exit_code == 0 {
    print!("{}", utils::messages::success_message("App built successfully."));
  } else {
    print!("{}", utils::messages::error_message("Failed to build app."));
  }

  println!(" (exited with code {})", build_exit_code.to_string().bold());
}

// TODO
pub fn dev(app: String) {
  build(app);
  
}