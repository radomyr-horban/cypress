// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'

import homePage from '../../pages/homePage'
import blogPage from '../../pages/blogPage'
import blogArticlePage from '../../pages/blogArticlePage'

it('7. should display main elements on the "Blog" article page', () => {
  cy.visit('/')
  acceptCookiesHelper()

  //! navigation
  homePage.elements.navigation.resourcesLink().should('be.visible')
  homePage.clickOnResourcesLink()
  homePage.elements.subNavigation.blogLink().should('be.visible')
  homePage.clickOnBlogLink()

  //! blog page
  cy.url().should('include', '/resources')
  blogPage.elements.heading().should('contain', 'Blog')
  blogPage.elements
    .subHeading()
    .should('contain', 'Browse our latest articles and updates')
  blogPage.elements.filterDropdown().should('be.visible')

  //! article card

  blogPage.elements.articleCategory().should('be.visible')
  blogPage.elements.articleTitle().should('be.visible')
  blogPage.elements.readArticleLink().should('be.visible')

  blogPage.clickOnReadArticleLink()

  //! article page
  blogArticlePage.elements.backToBlogLink().should('be.visible')
  blogArticlePage.elements
    .articleCategoryAndPublishDate()
    .should('be.visible')
    .and('contain', 'PUBLISHED')
  blogArticlePage.elements.authorName().should('be.visible') //!
  blogArticlePage.elements.shareOnSocialText().should('be.visible') //!

  //! back to blog
  blogArticlePage.clickOnBackToBlogLink()
  blogPage.elements.heading().should('contain', 'Blog')
})
