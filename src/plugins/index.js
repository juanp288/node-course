// Functions Adapters
const { getUUID } = require("../plugins/get-id.plugin");
const { getAge } = require("../plugins/get-age.plugin");

// Module Adapter
const { http } = require("../plugins/http-client.plugin");

// Handler url
const { getUrl } = require("../plugins/get-url.plugin");

module.exports = { getAge, getUUID, getUrl, http };
