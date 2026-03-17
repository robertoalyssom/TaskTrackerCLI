import { validateID } from "../validate.js";
import fs from "fs";
import chalk from "chalk";

const log = console.log;

export default function deleteTask(data, userInputs) {
  const [, id] = userInputs;

  try {
    validateID(id);

    const taskIndex = data.findIndex((task) => task.id === id);
    if (taskIndex === -1) throw Error(`Task with ID ${id} does not exist!`);

    data[taskIndex].description = data.splice(taskIndex, 1);

    fs.writeFileSync("./data.json", JSON.stringify(data));
    log(chalk.green(`Task deleted successfully (ID: ${id})`));
  } catch (e) {
    log(chalk.red("Error while deleting: "), e.message);
  }
}
