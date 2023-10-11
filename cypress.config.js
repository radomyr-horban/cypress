const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '14q943',
  e2e: {
    baseUrl: 'https://telnyx.com',
    setupNodeEvents(on, config) {},
  },
  viewportWidth: 1440,
  viewportHeight: 900,
})
