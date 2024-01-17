const { getAge, getUUID } = require("./plugins");

const { emailTemplate } = require("./js-foundation/01-template");
const { getUserById: getUserByIdcb } = require("./js-foundation/03-callbacks");
const { getUserById: getUserByIdArrow } = require("./js-foundation/04-arrow");
const { buildMakePerson } = require("./js-foundation/05-factory");
const getPokemonById = require("./js-foundation/06-promises");

// Exe 01-template
console.log(emailTemplate);

// Exe 02-destructuring
require("./js-foundation/02-destructuring");

// Exe 03-callbacks
getUserByIdcb(1, function (error, user) {
  if (error) {
    throw new Error(error);
  }

  console.log(user);
});

// Exe 04-arrow
getUserByIdArrow(1, (error, user) => {
  if (error) throw new Error(error);
  console.log(user);
});

// Exe 05-factory
const makePerson = buildMakePerson({ getUUID, getAge });
console.log({ person: makePerson({ name: "John", birthdate: "1985-10-21" }) });

// Exe 06-promises
getPokemonById(6)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finalmente"));
