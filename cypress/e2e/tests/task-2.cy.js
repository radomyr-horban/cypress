// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { signUpDefaultUser } from '../../helpers/createDefaultUser.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import signUpPage from '../../pages/signUpPage'
import supportCenterPage from '../../pages/supportCenterPage'
import verifyEmailPage from '../../pages/verifyEmailPage'
import blogPage from '../../pages/blogPage'

// !fixtures
import supportCenterPageFixture from '../../fixtures/supportCenterPageFixture.json'
import blogPageFixture from '../../fixtures/blogPageFixture.json'

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
    //! navigation
    homePage.elements.navigation.resourcesLink().should('be.visible')
    homePage.clickOnResourcesLink()
    homePage.elements.subNavigation.supportCenterLink().should('be.visible')
    homePage.clickOnSupportCenterLink()

    //! support page
    cy.url().should('include', 'support')
    supportCenterPage.elements.heading().should('be.visible')
    supportCenterPage.elements.searchInput().should('be.visible')

    supportCenterPage.elements
      .searchInput()
      .should('be.empty')
      .and('have.attr', 'placeholder', 'Search for articles...')
      .and('be.visible')

    supportCenterPage.clickOnSearchInput()
    supportCenterPage.elements.searchInput().should('be.focused')

    supportCenterPage.setSearchInput(`${supportCenterPageFixture.searchWord}`)
    supportCenterPage.elements
      .searchInput()
      .should('have.value', `${supportCenterPageFixture.searchWord}`)

    //! enter
    supportCenterPage.elements.searchInput().type('{enter}')
    cy.url().should('include', `${supportCenterPageFixture.searchWord}`)

    supportCenterPage.elements
      .searchResultsText()
      .should('contain', `${supportCenterPageFixture.searchWord}`)

    supportCenterPage.elements
      .searchInput()
      .should('have.value', `${supportCenterPageFixture.searchWord}`)

    supportCenterPage.elements
      .searchResultCards()
      .first()
      .contains(`${supportCenterPageFixture.searchWord}`, {
        matchCase: false,
      })

    //! clear search
    supportCenterPage.elements.searchClearBtn().scrollIntoView()
    supportCenterPage.clickOnSearchClearBtn()

    cy.url().should('not.contain', `${supportCenterPageFixture.searchWord}`)
    supportCenterPage.elements.searchInput().should('be.empty')
  })

  xit('6. should allow a user to sort articles on the blog page', () => {
    //! navigation
    homePage.elements.navigation.resourcesLink().should('be.visible')
    homePage.clickOnResourcesLink()
    homePage.elements.subNavigation.blogLink().should('be.visible')
    homePage.clickOnBlogLink()

    //! blog page
    cy.url().should('include', 'resources')
    blogPage.elements.heading().should('contain', 'Blog')
    blogPage.elements
      .subHeading()
      .should('contain', 'Browse our latest articles and updates')
    blogPage.elements.filterDropdown().should('be.visible')

    //! dropdown
    blogPage.clickOnFilterDropdown()
    blogPage.elements.filterDropdownList().should('be.visible')

    //! dropdown options
    blogPage.elements.filterDropdownListOptions().each((option) => {
      let currentOptionName = option.text().trim()
      let currentOptionHref = option.attr('href')

      cy.wrap(currentOptionHref).should(
        'contain',
        blogPageFixture[`${currentOptionName}`]
      )
    })
  })
})
