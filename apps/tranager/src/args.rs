use clap::{Args, Parser, Subcommand};

#[derive(Parser, Debug)]
#[clap(author, version, about)]
pub struct TranagerArgs {
    #[clap(subcommand)]
    pub entity_type: EntityType,
}

#[derive(Debug, Subcommand)]
pub enum EntityType {
    /// Builds an app defined in tranager.json
    Build(CompileArgs),
    /// Run a dev environment. Supports multiple apps concurrently
    Dev(DevArgs),
    /// Special packaging for Flutter projects. The build command in config is ignored.
    FlutterPackage(CompileArgs),
}

#[derive(Debug, Args)]
pub struct CompileArgs {
    /// Name of the app. Make sure its defined in tranager.json
    pub app: String,
}

#[derive(Debug, Args)]
pub struct DevArgs {
    /// One or more apps to run the dev environment of in parallel.
    pub apps: Vec<String>,
}
