const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '14q943',

  e2e: {
    baseUrl: 'https://telnyx.com',
  },

  viewportWidth: 1920,
  viewportHeight: 1080,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/my-test-output.xml',
  },

  video: true,
})
