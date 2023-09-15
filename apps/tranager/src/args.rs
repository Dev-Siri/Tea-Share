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
    /// Special packaging for Flutter projects. The build command in config is ignored.
    FlutterPackage(CompileArgs),
}

#[derive(Debug, Args)]
pub struct CompileArgs {
    #[arg(long)]
    /// Name of the app. Make sure its defined in tranager.json
    pub app: String,
}
