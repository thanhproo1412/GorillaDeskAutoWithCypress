const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/(integration|e2e)/**/*.cy.{js,jsx,ts,tsx}'

  },


});