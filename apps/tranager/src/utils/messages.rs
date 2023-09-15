use colored::*;

pub fn error_message(message: &str) -> String {
    format!("{} {}", "[X]".red(), message)
}

pub fn success_message(message: &str) -> String {
    format!("{} {}", "[✓]".green(), message)
}

pub fn info_message(message: &str) -> String {
    format!("{} {}", "[i]".blue(), message)
}
