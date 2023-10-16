// / <reference types="cypress" />
import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import releaseNotesPage from '../../pages/releaseNotesPage'

describe('Release Notes page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('2. should allow a user to filter notes', () => {
    homePage.clickOnReleaseNotesLink()

    cy.url().should('include', '/release-notes')
    releaseNotesPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Release notes')
    releaseNotesPage.elements.featureRequestLink().should('be.visible')
    releaseNotesPage.elements.followUsOnTwitterLink().should('be.visible')

    releaseNotesPage.clickOnFilterDropdown()
    releaseNotesPage.elements.filterDropdownList().should('be.visible')

    cy.fixture('releaseNotesPage.fixture').then((data) => {
      cy.verifyListItemsWithTitlesArray(
        releaseNotesPage.elements.filterDropdownListOptions(),
        data.productOptions
      )
    })

    releaseNotesPage.selectProductOption('API')
    cy.url().should('include', '/tag/api')
  })

  it('3. should display pagination', () => {
    homePage.clickOnReleaseNotesLink()

    cy.url().should('include', '/release-notes')
    releaseNotesPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Release notes')

    releaseNotesPage.elements.featureRequestLink().should('be.visible')
    releaseNotesPage.elements.followUsOnTwitterLink().should('be.visible')

    releaseNotesPage.elements.paginationNav().should('be.visible')

    releaseNotesPage.elements.currentPageNumber().should('contain', '1')

    releaseNotesPage.clickOnNextPageLink()
    cy.url().should('include', '/page/2')
    releaseNotesPage.elements.currentPageNumber().should('contain', '2')

    releaseNotesPage.clickOnPreviousPageLink()
    cy.url().should('include', '/page/1')
    releaseNotesPage.elements.currentPageNumber().should('contain', '1')
  })
})
