// / <reference types="cypress" />

import homePage from '../../pages/homePage'

describe('Telnyx website', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
  })

  it('displays two todo items by default', () => {
    expect(true).to.be.true
  })
})
