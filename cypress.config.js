const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    chromeWebSecurity : true
  },
};
