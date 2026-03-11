# TaskTracker CLI

A simple command-line task tracker built with Node.js.

This project follows the [roadmap.sh Task Tracker challenge](https://roadmap.sh/projects/task-tracker), providing a local JSON-based task manager you can run from the terminal.

## Features

- Add tasks
- Update existing task descriptions
- Delete tasks by ID
- Mark tasks as `in-progress` or `done`
- List all tasks or filter by status (`todo`, `in-progress`, `done`)
- Persist tasks in a local `data.json` file

## Tech Stack

- Node.js (ES Modules)
- [Chalk](https://www.npmjs.com/package/chalk)
- Local file persistence with Node `fs`

## Project Structure

```text
TaskTrackerCLI/
|- index.js
|- data.json
|- package.json
|- src/
|  |- commands/
|  |  |- index.js
|  |- taskActions/
|  |  |- addTask.js
|  |  |- updateTask.js
|  |  |- deleteTask.js
|  |  |- switchProgress.js
|  |  |- listTask.js
|  |- validate.js
```

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. (Optional) Link globally to use `tasktracker` anywhere:

```bash
npm link
```

After linking, run commands with `tasktracker ...`.

If you do not run `npm link`, execute via Node directly:

```bash
node index.js <command> [args]
```

## Usage

### Version

```bash
tasktracker -v
tasktracker --version
```

### Add a task

```bash
tasktracker -a "Buy groceries"
tasktracker --add "Buy groceries"
```

### Update a task

```bash
tasktracker -u 1 "Buy groceries and cook dinner"
tasktracker --update 1 "Buy groceries and cook dinner"
```

### Delete a task

```bash
tasktracker -d 1
tasktracker --delete 1
```

### Mark task status

```bash
tasktracker mark-in-progress 2
tasktracker mark-done 2
```

### List tasks

```bash
tasktracker list
tasktracker list todo
tasktracker list in-progress
tasktracker list done
```

## Data Model

Tasks are stored in `data.json` as an array of objects:

```json
{
  "id": "1",
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "3/6/2026, 1:00:00 PM",
  "updatedAt": "3/6/2026, 1:00:00 PM"
}
```

Fields:

- `id`: string identifier (incremental)
- `description`: task text
- `status`: `todo` | `in-progress` | `done`
- `createdAt`: creation timestamp (`toLocaleString()`)
- `updatedAt`: last update timestamp (`toLocaleString()`)

## Error Handling

Current validation includes:

- Missing command
- Unknown command
- Invalid ID (must be numeric and non-negative)
- ID not found

Errors are printed in the terminal.

## Notes and Current Limitations

- Data is stored in a single local file (`data.json`) with synchronous writes.
- IDs are generated from the last item in the array; manual edits to `data.json` may affect ID continuity.
- Output formatting is plain console logs (including some debug logs).

## Roadmap Ideas

- Add automated tests.
- Add input sanitization and stricter schema validation.
- Improve output formatting (tables/colors) with Chalk.
- Support custom data file path.

## License

No license file is currently defined in this repository.
