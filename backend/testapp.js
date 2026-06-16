console.log("Hello world");

const config = require("./appconfig.js");


console.log(`App Name: ${config.appName}`);
console.log(`Version: ${config.version}`);
console.log(`Debug Mode: ${config.debugMode}`);
