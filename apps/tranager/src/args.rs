use clap::{Parser, Subcommand, Args};

#[derive(Parser, Debug)]
#[clap(author, version, about)]
pub struct TranagerArgs {
  #[clap(subcommand)]
  pub build: BuildType,
}

#[derive(Debug, Subcommand)]
pub enum BuildType {
  Build(BuildArgs)
}

/// Builds an app defined in tranager.json
#[derive(Debug, Args)]
pub struct BuildArgs {
  #[arg(long)]
  pub app: String
}
