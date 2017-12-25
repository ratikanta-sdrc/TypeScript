//Import a single export from a module
import { ZipCodeValidator } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();

// imports can also be renamed

import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();

// Import the entire module into a single variable, and use it to access the module exports
import * as validator from "./ZipCodeValidator";
let myValidator = new validator.ZipCodeValidator();