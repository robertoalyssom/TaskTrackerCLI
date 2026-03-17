import { validateTask, validateID } from "../validate.js";
import fs from "fs";
import chalk from "chalk";

const log = console.log;

export default function updateTask(data, userInputs) {
  const [, id, ...newTask] = userInputs;

  try {
    validateID(id);
    validateTask(newTask);

    const taskIndex = data.findIndex((task) => task.id === id);
    if (taskIndex === -1) throw Error(`Task with ID ${id} does not exist!`);

    data[taskIndex].description = newTask.join(" ");
    data[taskIndex].updatedAt = new Date().toLocaleString();

    fs.writeFileSync("./data.json", JSON.stringify(data));
    log(chalk.green(`Task "${newTask.join(" ")}" updated (ID: ${id})`));
  } catch (e) {
    log(chalk.red("Error updating task: ", e.message));
  }
}
