// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'

describe('Blog page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('5. should allow a user to sort articles', function () {
    homePage.clickOnResourcesLink()
    homePage.clickOnBlogLink()

    cy.url().should('include', 'resources')
    blogPage.elements.heading().should('contain', 'Blog')
    blogPage.elements
      .subHeading()
      .should('contain', 'Browse our latest articles and updates')

    blogPage.clickOnFilterDropdown()
    blogPage.elements.filterDropdownList().should('be.visible')

    blogPage.elements.filterDropdownListOptions().each((option) => {
      let currentOptionName = option.text().trim()
      let currentOptionHref = option.attr('href')

      cy.fixture('blogPage.fixture').then((data) => {
        cy.wrap(currentOptionHref).should(
          'contain',
          data[`${currentOptionName}`]
        )
      })
    })
  })

  it('6. should display pagination', () => {
    homePage.clickOnResourcesLink()
    homePage.clickOnBlogLink()

    cy.url().should('include', '/resources')
    blogPage.elements.heading().should('contain', 'Blog')
    blogPage.elements
      .subHeading()
      .should('contain', 'Browse our latest articles and updates')

    blogPage.elements.paginationNav().should('be.visible')
    blogPage.clickOnNextPageBtn()

    cy.url().should('include', '/page/2')
    blogPage.elements.heading().should('contain', 'Page 2')
    blogPage.elements.subHeading().should('contain', '(2)')
  })
})
