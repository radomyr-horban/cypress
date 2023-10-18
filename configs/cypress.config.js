const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '14q943',
  // projectId: '64kke5',

  e2e: {
    baseUrl: 'https://telnyx.com',
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
})
