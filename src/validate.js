// Validate comand and input

function validateTask(userInputs) {
  if (userInputs.length > 1) {
    throw Error(
      'Just one task per command, involved by comas "", is required!',
    );
  }
}

function validateID(id) {
  if (isNaN(id)) throw Error("ID input must be a number!");
  if (id < 0) throw Error("ID input must be a positive number!");
}

export { validateTask, validateID };
