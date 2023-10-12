# Task 2: Cypress

### General requirements:

- Install a git client such as [git bash](https://git-scm.com/downloads)
- Node version: 18 [(Node.js)](https://nodejs.org/en)

#### Clone the repository:

    git clone https://github.com/radomyr-horban/cypress.git

### Installing dependencies:

    npm ci

#### To run the tests go to the root of the project and run:

    npm run cypress:run

#### To open the Cypress Launchpad run:

    npm run cypress:open

#### By default all tests run in a `headless` mode. To run the tests in a `headed` browser go to the root of the project and run:

    npm run cypress:run:headed

#### By default all tests run in the `Electron` browser. To run the tests in a specific browser go to the root of the project and run:

    npm run cypress:run:browser <browser_name>

#### By default all tests run with the options from the `cypress.config.js` file. To run the tests with a different `config` file (e.x., `cypress.config.mobile.js` or `cypress.config.reporter.js`) go to the root of the project and run:

    npm run cypress:run --config-file <name_of_custom_cypress.config_file>
