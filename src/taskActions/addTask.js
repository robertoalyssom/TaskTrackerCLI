import { validateTask } from "../validate.js";
import fs from "fs";
import chalk from "chalk";

const log = console.log;

// Add new task
export default function addTask(data, userInputs) {
  try {
    validateTask(userInputs.slice(1));

    const newId = createID(data);
    const task = userInputs[1];
    const newTask = {
      id: newId,
      description: task,
      status: "todo",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };

    // Add new task at the end of data
    data.push(newTask);

    // Write updated data in ./data.json
    fs.writeFileSync("./data.json", JSON.stringify(data));

    log(chalk.green(`Task "${task}" added sucessfully (ID: ${newId})`));
  } catch (e) {
    console.log(chalk.red("Error while adding task: ", e.message));
  }
}

function createID(data) {
  const lastTask = data.slice(-1);
  const newTaskID = data.length === 0 ? 1 : Number(lastTask[0].id) + 1;
  console.log("*newTaskID: ", newTaskID);

  return String(newTaskID);
}
