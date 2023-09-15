mod args;
mod config;
mod constants;
mod workflow {
    pub mod build;
    pub mod package;
}
mod utils {
    pub mod compression;
    pub mod messages;
}

use args::{EntityType, TranagerArgs};
use clap::Parser;

fn main() {
    let args = TranagerArgs::parse();

    match args.entity_type {
        EntityType::Build(build_args) => workflow::build::build(build_args.app),
        EntityType::FlutterPackage(package_args) => {
            workflow::package::flutter_package(package_args.app)
        }
    }
}
