const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'hn74h7',
  e2e: {
    // baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
