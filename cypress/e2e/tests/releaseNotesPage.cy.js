// / <reference types="cypress" />
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import releaseNotesPage from '../../pages/releaseNotesPage'

import releaseNotesPageFixture from '../../fixtures/releaseNotesPage.fixture.json'

describe('Telnyx website', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('2. should allow a user to filter notes on the "Release Notes" page ', () => {
    //! navigation
    homePage.elements.footer.releaseNotesLink().scrollIntoView()
    homePage.elements.footer.releaseNotesLink().should('be.visible')
    homePage.clickOnReleaseNotesLink()

    //! Release Notes page
    cy.url().should('include', '/release-notes')
    releaseNotesPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Release notes')
    releaseNotesPage.elements.filterDropdown().should('be.visible')
    releaseNotesPage.elements.featureRequestLink().should('be.visible')
    releaseNotesPage.elements.followUsOnTwitterLink().should('be.visible')

    //! Filter
    releaseNotesPage.clickOnFilterDropdown()
    releaseNotesPage.elements.filterDropdownList().should('be.visible')

    // //! titles
    cy.verifyListItemsWithTitlesArray(
      releaseNotesPage.elements.filterDropdownListOptions(),
      releaseNotesPageFixture.productOptions
    )

    //! select option
    releaseNotesPage.selectProductOption('API')
    cy.url().should('include', '/tag/api')
  })

  it('3. should display pagination on the "Release notes" page', () => {
    //! navigation
    homePage.elements.footer.releaseNotesLink().scrollIntoView()
    homePage.elements.footer.releaseNotesLink().should('be.visible')
    homePage.clickOnReleaseNotesLink()

    //! Release Notes page
    cy.url().should('include', '/release-notes')
    releaseNotesPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Release notes')
    releaseNotesPage.elements.filterDropdown().should('be.visible')
    releaseNotesPage.elements.featureRequestLink().should('be.visible')
    releaseNotesPage.elements.followUsOnTwitterLink().should('be.visible')

    //! pagination
    releaseNotesPage.elements.paginationNav().should('be.visible')

    //! page-1
    releaseNotesPage.elements.currentPageNumber().should('contain', '1')
    releaseNotesPage.elements
      .nextPageLinkTitle()
      .should('have.text', 'Go to next page')
    releaseNotesPage.clickOnNextPageLink()
    cy.url().should('include', '/page/2')
    releaseNotesPage.elements.currentPageNumber().should('contain', '2')

    //! page-2
    releaseNotesPage.elements
      .previousPageLinkTitle()
      .should('have.text', 'Go to previous page')
    releaseNotesPage.clickOnPreviousPageLink()
    cy.url().should('include', '/page/1')
    releaseNotesPage.elements.currentPageNumber().should('contain', '1')
  })
})
