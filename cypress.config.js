const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  projectId: "hgwkwi",
  viewportWidth: 1920,
  viewportHeight: 1080,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporterConfig.json',
  },


  e2e: {
    baseUrl: "https://apiv2.gdesk.io", // URL API
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/(integration|e2e)/**/*.cy.{js,jsx,ts,tsx}'

  },

  "video": true,  // Enable video recording
  "videosFolder": "cypress/videos",  // Folder where videos will be saved
  "videoCompression": false,  // Disable video compression (optional)
  "trashAssetsBeforeRuns": true  // Optionally clear assets before runs

});