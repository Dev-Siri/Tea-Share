mod args;
mod constants;
mod utils {
  pub mod messages;
}
mod core {
  pub mod config;
  pub mod runner;
}

use crate::core::runner;
use args::{TranagerArgs, BuildType};
use clap::Parser;

fn main() {
  let args = TranagerArgs::parse();

  match args.build {
    BuildType::Build(build_args) => runner::build(build_args.app),
  }
}
