export default function listTask(data, inputs) {
  const [, status] = inputs;

  try {
    if (!status) {
      console.log("All tasks:", data);
      return;
    }

    const statusLabels = {
      done: "Tasks marked as done:",
      todo: "Tasks marked as todo:",
      "in-progress": "Tasks marked as in-progress:",
    };

    const filteredTasks = data.filter((task) => task.status === status);
    console.log(statusLabels[status], filteredTasks);
  } catch (e) {
    console.log("Error while listing tasks: ", e);
  }
}
