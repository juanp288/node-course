const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;

// Destructuring object
console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });

const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

// Destructuring array
const [, , , batman] = characters;

console.log("Destructuring array", batman);
