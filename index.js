#!/usr/bin/env node
import runCommand from "./src/commands/index.js";
import process from "process";
import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(new URL("./data.json", import.meta.url), "utf8") // It returns a path URL string
); // It converts the string into a JS object

const userInputs = process.argv.slice(2);

runCommand(userInputs, data);
