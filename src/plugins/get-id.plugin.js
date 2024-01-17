const { v4: uuidv4 } = require("uuid");

// Adapter
const getUUID = () => uuidv4();

module.exports = { getUUID };
