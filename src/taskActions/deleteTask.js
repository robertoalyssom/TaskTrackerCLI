import { validateID } from "../validate.js";
import fs from "fs";

export default function deleteTask(data, userInputs) {
  const [, id] = userInputs;

  try {
    validateID(id);

    const taskIndex = data.findIndex((task) => task.id === id);
    if (taskIndex === -1) throw Error(`Task with ID ${id} does not exist!`);

    data[taskIndex].description = data.splice(taskIndex, 1);

    fs.writeFileSync("./data.json", JSON.stringify(data));
    console.log(`Task deleted successfully (ID: ${id})`);
  } catch (e) {
    console.log("Error while deleting: ", e);
  }
}
