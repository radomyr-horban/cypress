// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { signUpDefaultUser } from '../../helpers/createDefaultUser.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import signUpPage from '../../pages/signUpPage'
import supportCenterPage from '../../pages/supportCenterPage'
import verifyEmailPage from '../../pages/verifyEmailPage'

// !fixtures
import supportCenterPageFixture from '../../fixtures/supportCenterPageFixture.json'

describe('Telnyx website', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    acceptCookiesHelper()
  })

  //! failing
  xit('1. should open a page with "sign-up" in its URL', () => {
    homePage.clickOnSignUpBtn()

    //!
    cy.url().should('include', '/sign-up')
    signUpPage.elements.emailInput().should('be.visible')
    const userData = generateUserData()
    signUpDefaultUser(userData)

    //!
    // cy.visit('https://telnyx.com/sign-up/verify-email/f')
    cy.url().should('include', '/sign-up/verify-email')
    verifyEmailPage.elements.heading().should('have.text', 'One last step')
    verifyEmailPage.elements.descriptionText().should('be.visible')
    verifyEmailPage.elements.contactUsLink().should('be.visible')
  })

  xit('5. should allow a user to search the website', () => {
    homePage.elements.navigation.resourcesLink().should('be.visible')
    homePage.clickOnResourcesLink()
    homePage.elements.subNavigation.supportCenterLink().should('be.visible')
    homePage.clickOnSupportCenterLink()

    //! support page
    cy.url().should('include', 'support')
    supportCenterPage.elements.heading().should('be.visible')
    supportCenterPage.elements.searchInput().should('be.visible')

    supportCenterPage.clickOnSearchInput()
    supportCenterPage.elements.searchInput().should('be.focused')

    supportCenterPage.setSearchInput(`${supportCenterPageFixture.searchWord}`)
    supportCenterPage.elements
      .searchInput()
      .should('have.value', `${supportCenterPageFixture.searchWord}`)
    supportCenterPage.elements.searchInput().type('{enter}')

    supportCenterPage.elements
      .searchResultsText()
      .should('contain', `${supportCenterPageFixture.searchWord}`)

    supportCenterPage.elements
      .searchInput()
      .should('have.value', `${supportCenterPageFixture.searchWord}`)

    supportCenterPage.elements
      .searchResultCards()
      .first()
      .should('be.visible')
      .contains(`${supportCenterPageFixture.searchWord}`, {
        matchCase: false,
      })
      .should('be.visible')
  })
})
