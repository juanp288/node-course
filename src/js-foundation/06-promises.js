const { http, getUrl } = require("../plugins");

const getPokemonById = async (id) => {
  const pokemon = await http.get(getUrl(id));
  return pokemon.name;
};

module.exports = getPokemonById;
