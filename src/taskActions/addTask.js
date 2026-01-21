import { validateInputAdd } from "../validate.js";
import fs from "fs";

// Add new task
export default function addTask(data, userInputs) {
  try {
    validateInputAdd(userInputs.slice(1));

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

    console.log(`Task "${task}" added sucessfully (ID: ${newId})`);
  } catch (e) {
    console.log(e);
  }
}

function createID(data) {
  const lastTask = data.slice(-1);
  // const newTaskID = Number(lastTask[0].id) + 1;
  const newTaskID = Number(lastTask[0].id + 1);
  console.log("*newTaskID: ", newTaskID);

  return String(newTaskID);
}

// typing "test a test" it's interprets as a unique argument
