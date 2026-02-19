import { validateTask, validateID } from "../validate.js";
import fs from "fs";

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
    console.log(`Task "${newTask.join(" ")}" updated successfully (ID: ${id})`);
  } catch (e) {
    console.log("Error updating: ", e);
  }
}
