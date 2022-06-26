#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}