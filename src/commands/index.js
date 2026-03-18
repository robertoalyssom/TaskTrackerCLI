import addTask from "../taskActions/addTask.js";
import updateTask from "../taskActions/updateTask.js";
import deleteTask from "../taskActions/deleteTask.js";
import markProgress from "../taskActions/switchProgress.js";
import listTask from "../taskActions/listTask.js";

export default function runCommand(userInputs, data) {
  const command = userInputs[0];

  try {
    if (!command) throw Error("No command provided!");

    const commandHandlers = {
      "-v": () => showVersion(),
      "--version": () => showVersion(),
      "-a": () => addTask(data, userInputs),
      "--add": () => addTask(data, userInputs),
      "-u": () => updateTask(data, userInputs),
      "--update": () => updateTask(data, userInputs),
      "-d": () => deleteTask(data, userInputs),
      "--delete": () => deleteTask(data, userInputs),
      "mark-in-progress": () => markProgress(data, userInputs),
      "mark-done": () => markProgress(data, userInputs),
      list: () => listTask(data, userInputs),
    };

    const handler = commandHandlers[command];
    if (!handler) throw Error("Wrong command!");

    return handler();
  } catch (e) {
    console.log("Error running command: ", e);
  }
}

// Display app version
function showVersion() {
  console.log("0.0.1");
}
