// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import blogPageFixture from '../../fixtures/blogPage.fixture.json'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'

describe('Blog page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('5. should allow a user to sort articles on the "Blog" page', () => {
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

  it('6. should display pagination on the "Blog" page', () => {
    //! navigation (the same check as in previous test case????)
    homePage.elements.navigation.resourcesLink().should('be.visible')
    homePage.clickOnResourcesLink()
    homePage.elements.subNavigation.blogLink().should('be.visible')
    homePage.clickOnBlogLink()

    //! blog page (the same check as in previous test case????)
    cy.url().should('include', '/resources')
    blogPage.elements.heading().should('contain', 'Blog')
    blogPage.elements
      .subHeading()
      .should('contain', 'Browse our latest articles and updates')
    blogPage.elements.filterDropdown().should('be.visible')

    //! pagination
    blogPage.elements.paginationNav().should('be.visible')
    blogPage.elements.nextPageLinkTitle().should('have.text', 'Go to next page')
    blogPage.clickOnNextPageBtn()
    //! page-2
    cy.url().should('include', '/page/2')
    blogPage.elements.heading().should('contain', 'Page 2')
    blogPage.elements.subHeading().should('contain', '(2)')
  })
})
