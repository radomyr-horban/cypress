const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'hn74h7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
