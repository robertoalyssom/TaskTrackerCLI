import addTask from "../taskActions/addTask.js";
import updateTask from "../taskActions/updateTask.js";

export default function runCommand(userInputs, data) {
  const command = userInputs[0];
  console.log("command: ", command);

  // I need to crate validation according to 'userInputs' array length!
  (command === "-v" || command === "--version") && showVersion();
  (command === "-a" || command === "--add") && addTask(data, userInputs);
  (command === "-u" || command === "--update") && updateTask(data, userInputs);
}

// Show app version
function showVersion() {
  console.log("0.0.1");
}
