// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'
import blogArticlePage from '../../pages/blogArticlePage'

describe('Blog aricle page', () => {
  beforeEach(() => {
    cy.visit('/')
    acceptCookiesHelper()
  })

  it('7. should display main elements', () => {
    homePage.clickOnResourcesLink()
    homePage.clickOnBlogLink()

    cy.url().should('include', '/resources')
    blogPage.elements.heading().should('contain', 'Blog')
    blogPage.elements
      .subHeading()
      .should('contain', 'Browse our latest articles and updates')
    blogPage.elements.filterDropdown().should('be.visible')

    blogPage.elements.articleCategory().should('be.visible')
    blogPage.elements.articleTitle().should('be.visible')

    blogPage.clickOnReadArticleLink()

    blogArticlePage.elements.heading().should('be.visible')
    blogArticlePage.elements.subHeading().should('be.visible')

    blogArticlePage.elements
      .articleCategoryAndPublishDate()
      .should('be.visible')
      .and('contain', 'PUBLISHED')
    blogArticlePage.elements.authorName().should('be.visible')
    blogArticlePage.elements.shareOnSocialText().should('be.visible')

    blogArticlePage.clickOnBackToBlogLink()
    blogPage.elements.heading().should('contain', 'Blog')
  })
})
