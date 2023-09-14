use crate::constants;
use serde::{Serialize, Deserialize};
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
  let config_contents_str = fs::read_to_string(constants::CONFIG_FILE)
    .expect("Failed to read config file.");
  let config_contents: TranagerConfig = serde_json::from_str(&config_contents_str)
    .expect("Failed to parse config file.");

  config_contents
}