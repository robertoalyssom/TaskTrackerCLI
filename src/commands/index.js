import addTask from "../taskActions/addTask.js";
import updateTask from "../taskActions/updateTask.js";
import deleteTask from "../taskActions/deleteTask.js";
import markProgress from "../taskActions/switchProgress.js";
import listTask from "../taskActions/listTask.js";

export default function runCommand(userInputs, data) {
  const command = userInputs[0];
  console.log("command: ", command);

  // I need to crate validation according to 'userInputs' array length!
  (command === "-v" || command === "--version") && showVersion();
  (command === "-a" || command === "--add") && addTask(data, userInputs);
  (command === "-u" || command === "--update") && updateTask(data, userInputs);
  (command === "-d" || command === "--delete") && deleteTask(data, userInputs);
  (command === "mark-in-progress" || command === "mark-done") &&
    markProgress(data, userInputs);
  command === "list" && listTask(data, userInputs);
}

// Show app version
function showVersion() {
  console.log("0.0.1");
}
