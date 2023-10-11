// / <reference types="cypress" />
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { createDefaultUser } from '../../helpers/createDefaultUser.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import microsoftTeamsPage from '../../pages/microsoftTeamsPage'
import thankYouPage from '../../pages/thankYouPage'

it('1. should allow a user to submit a form on the "Microsoft Teams" page ', () => {
  cy.visit('/')
  acceptCookiesHelper()

  //! navigation
  homePage.elements.navigation.productsLink().should('be.visible')
  homePage.clickOnProductsLinkLink()
  homePage.elements.subNavigation.microsoftTeamsLink().should('be.visible')
  homePage.clickOnMicrosoftTeamsLink()

  //! Microsoft Teams page
  cy.url().should('include', '/products/enterprise-integrations-ms-teams')
  microsoftTeamsPage.elements
    .heading()
    .should('be.visible')
    .and('have.text', 'Microsoft Teams')
  microsoftTeamsPage.elements.heroOverviewText().should('be.visible')
  microsoftTeamsPage.elements.talkToExpertBtn().should('be.visible')
  microsoftTeamsPage.elements.getStartedLink().should('be.visible')

  //! Form section
  microsoftTeamsPage.elements.formSectionHeading().should('be.visible')
  microsoftTeamsPage.elements.formSectionDescription().should('be.visible')
  microsoftTeamsPage.elements.formBox().should('be.visible')

  //! Form
  const userData = generateUserData()
  createDefaultUser(userData)

  //! Thank you page
  cy.url().should('include', '/thank-you?formId')

  thankYouPage.elements.heading().should('be.visible')
  thankYouPage.elements.heroOverviewText().should('be.visible')
})
