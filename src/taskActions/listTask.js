import chalk from "chalk";

const log = console.log;

export default function listTask(data, inputs) {
  const [, status] = inputs;

  try {
    if (!status) {
      log(chalk.cyan("All tasks:"), data);
      return;
    }

    const statusLabels = {
      done: "Tasks marked as done:",
      todo: "Tasks marked as todo:",
      "in-progress": "Tasks marked as in-progress:",
    };

    const filteredTasks = data.filter((task) => task.status === status);
    log(chalk.cyan(`Tasks ${status}:`), statusLabels[status], filteredTasks);
  } catch (e) {
    log(chalk.red("Error while listing tasks: ", e.message));
  }
}
