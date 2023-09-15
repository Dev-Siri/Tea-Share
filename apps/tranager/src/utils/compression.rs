use flate2::Compression;
use std::fs::File;
use tar::Builder;

pub fn compress_folder(folder_path: &str, output_path: &str) -> Result<(), std::io::Error> {
    let output_file = File::create(output_path)?;
    let encoder = flate2::write::GzEncoder::new(output_file, Compression::best());

    let mut tar = Builder::new(encoder);

    tar.append_dir_all(".", folder_path)?;

    Ok(())
}
