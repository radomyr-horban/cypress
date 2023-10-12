const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '14q943',

  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/my-test-output.xml',
  },

  video: true,

  e2e: {
    baseUrl: 'https://telnyx.com',
  },
})
