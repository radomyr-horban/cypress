const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '14q943',

  viewportWidth: 375,
  viewportHeight: 812,

  e2e: {
    baseUrl: 'https://telnyx.com',
    setupNodeEvents(on, config) {},
  },
})
