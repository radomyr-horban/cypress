# Task 2: Cypress

### Website:

https://telnyx.com/

### General requirements:

- Node version: 18.18.0 [(Node.js)](https://nodejs.org/en)

#### Clone the repository:

    git clone https://github.com/radomyr-horban/cypress.git

## Installing dependencies:

    npm ci

#### To run the tests go to the root of the project and run:

    npm run cypress:run

#### To open the Cypress Launchpad run:

    npm run cypress:open

## Browsers:

#### By default all tests run in a `headless` mode. To run the tests in a `headed` browser go to the root of the project and run:

    npm run cypress:run:headed

#### By default all tests run in the `Electron` browser. To run the tests in a specific browser (the browser must be installed on your machine) go to the root of the project and run:

    npm run cypress:run:browser <browser_name>

## Config files:

#### By default all tests run with the options from the `cypress.config.js` file.

#### But it's possible to run the tests with a different `config` file.

#### To run tests for a `laptop` viewport go to the root of the project and run:

    npm run cypress:run:laptop

#### To run tests and create `junit` report go to the root of the project and run:

    npm run cypress:run:reporter
