// Validate comand and input

function validateInputAdd(userInputs) {
  if (userInputs.length > 1) {
    throw Error(
      'Just one task per command, involved by comas "", is required!'
    );
  }
}

export { validateInputAdd };
