use crate::{constants, utils::messages};
use serde::{Deserialize, Serialize};
use std::fs;

#[derive(Serialize, Deserialize)]
pub struct TranagerConfig {
    pub source: String,
    pub apps: Vec<AppConfig>,
}

#[derive(Serialize, Deserialize)]
pub struct AppConfig {
    pub name: String,
    pub commands: Commands,
}

#[derive(Serialize, Deserialize)]
pub struct Commands {
    pub build: String,
    pub dev: String,
}

pub fn get_config() -> TranagerConfig {
    let config_contents_str =
        fs::read_to_string(constants::CONFIG_FILE).expect("Failed to read config file.");

    serde_json::from_str(&config_contents_str).expect("Failed to parse config file.")
}

pub fn get_app_config(app_name: &str) -> AppConfig {
    let config = get_config();

    config
        .apps
        .into_iter()
        .filter(|app_config| app_config.name == app_name)
        .next()
        .ok_or(messages::error_message("App was not found in the config."))
        .expect(&messages::error_message(
            "Failed to find the specified app in config.",
        ))
}
