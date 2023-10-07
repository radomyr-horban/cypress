// / <reference types="cypress" />

import { acceptCookies } from '../../helpers/acceptCookies.helper'
import { createDefaultUser } from '../../helpers/createDefaultUser.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import signUpPage from '../../pages/signUpPage'

describe('Telnyx website', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    acceptCookies()
  })

  it('should open a page with "sign-up" in its URL', () => {
    homePage.clickOnSignUpBtn()

    cy.url().should('include', '/sign-up') // => true

    signUpPage.elements.emailInput().should('be.visible')

    const userData = generateUserData()
    createDefaultUser(userData)
  })
})
