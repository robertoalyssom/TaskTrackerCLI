import { validateID } from "../validate.js";
import fs from "fs";

export default function markProgress(data, inputs) {
  const [progress, id] = inputs;

  try {
    validateID(id);

    const taskIndex = data.findIndex((task) => task.id === id);
    if (taskIndex === -1) throw Error(`Task with ID ${id} does not exist!`);

    if (progress === "mark-in-progress") data[taskIndex].status = "todo";
    else data[taskIndex].status = "done";

    fs.writeFileSync("./data.json", JSON.stringify(data));
    console.log(`Task progress updated successfully (ID: ${id})`);
  } catch (e) {}
}
