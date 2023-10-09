const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'hn74h7',
  e2e: {
    setupNodeEvents(on, config) {},
  },
  viewportWidth: 1440,
  viewportHeight: 900,
})
