use crate::{
    config, constants,
    utils::{compression, messages},
};
use std::{
    fs,
    process::{exit, Command},
};

pub fn flutter_package(app: String) {
    let app_config = config::get_app_config(&app);

    if !app_config.commands.build.contains("flutter") {
        println!(
            "{}",
            messages::error_message("The app you selected is not a flutter project.")
        )
    }

    println!(
        "{}",
        messages::info_message("Building the standalone APK...")
    );
    let mut build_process = Command::new("sh");
    let config = config::get_config();

    build_process
        .arg("-c")
        .arg(constants::FLUTTER_PACKAGE_SINGLUAR_APK_BUILD_COMMAND);

    let app_dir = format!("{}/{}", config.source, app);
    build_process.current_dir(&app_dir);

    let standalone_build_successful = build_process
        .status()
        .expect(&messages::error_message(
            "Failed to get build status of the standalone APK build.",
        ))
        .success();

    if standalone_build_successful {
        println!(
            "{}",
            messages::success_message("Standalone APK built successfully.")
        );
    } else {
        println!(
            "{}",
            messages::error_message("Failed to build standalone APK.")
        )
    }

    let output_dir = format!("{}/build/app/outputs/apk/release", app_dir);
    let release_directory_path = format!(
        "{}/{}_{}",
        app_dir,
        constants::FLUTTER_PACKAGE_OUTPUT_DIR,
        app
    );

    println!(
        "{}",
        messages::info_message(&format!(
            "Creating release directory at {}...",
            release_directory_path
        ))
    );

    fs::create_dir(&release_directory_path).expect(&messages::error_message(
        "Failed to write release directory.",
    ));

    println!(
        "{}",
        messages::info_message("Copying over standalone APK to the release directory...")
    );

    fs::copy(
        format!("{}/app-release.apk", output_dir),
        format!(
            "{}/{}",
            release_directory_path,
            constants::FLUTTER_PACKAGE_SINGULAR_APK_NAME
        ),
    )
    .expect(&messages::error_message(
        "Failed to copy over singular apk build to release directory.",
    ));

    println!("{}", messages::info_message("Building the app..."));

    build_process = Command::new("sh");
    build_process
        .arg("-c")
        .arg(constants::FLUTTER_PACKAGE_PER_ABI_APK_BUILD_COMMAND);

    build_process.current_dir(&app_dir);

    let per_abi_build_successful = build_process
        .status()
        .expect(&messages::error_message(
            "Failed to get build status of the per ABI APK builds.",
        ))
        .success();

    if per_abi_build_successful {
        println!(
            "{}",
            messages::success_message("Per ABI APKs built successfully.")
        );
    } else {
        println!(
            "{}",
            messages::error_message("Failed to build Per ABI APKs.")
        );
        exit(1)
    }

    let output_dir_clone = output_dir.clone();
    let per_abi_builds = match fs::read_dir(output_dir) {
        Ok(builds) => builds,
        Err(_) => {
            println!(
                "{}",
                messages::error_message("Failed to read flutter's build directory.")
            );
            exit(1);
        }
    };

    for file in per_abi_builds.into_iter() {
        let current_apk = file.expect(&messages::error_message(
            "Failed to read individual file in a per ABI build.",
        ));
        let current_apk_name = current_apk
            .file_name()
            .to_str()
            .expect(&messages::error_message(
                "Failed to convert OsString to &str.",
            ))
            .to_owned();
        println!(
            "{}",
            messages::info_message(&format!("Analyzing & Renaming `{}`", current_apk_name))
        );

        fs::rename(
            format!("{}/{}", output_dir_clone, current_apk_name),
            format!(
                "{}/{}",
                output_dir_clone,
                &current_apk_name
                    .replace("app", "tea_share")
                    .replace("-release", "")
            ),
        )
        .expect(&messages::error_message(
            "Failed to rename release directory built APKs.",
        ));
    }

    println!(
        "{}",
        messages::info_message("Compressing ABI APK Builds...")
    );
    compression::compress_folder(
        &output_dir_clone,
        &format!(
            "{}/{}",
            release_directory_path,
            constants::FLUTTER_PACKAGE_PER_ABI_TAR_NAME
        ),
    )
    .expect(&messages::error_message(
        "Failed to compress seperate abi builds.",
    ));

    println!(
        "{}",
        messages::success_message("App packaged successfully.")
    );
}
