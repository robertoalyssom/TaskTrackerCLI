import { validateID } from "../validate.js";
import fs from "fs";
import chalk from "chalk";

const log = console.log;

export default function markProgress(data, inputs) {
  const [progress, id] = inputs;

  try {
    validateID(id);

    const taskIndex = data.findIndex((task) => task.id === id);
    if (taskIndex === -1) throw Error(`Task with ID ${id} does not exist!`);

    if (progress === "mark-in-progress") data[taskIndex].status = "in-progress";
    else data[taskIndex].status = "done";

    // update updatedAt field
    data[taskIndex].updatedAt = new Date().toLocaleString();

    fs.writeFileSync("./data.json", JSON.stringify(data));
    log(chalk.green(`Task progress updated successfully (ID: ${id})`));
  } catch (e) {
    log(chalk.red("Error while switching progress status: ", e.message));
  }
}
