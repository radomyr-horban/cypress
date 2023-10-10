// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { signUpDefaultUser } from '../../helpers/createDefaultUser.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import signUpPage from '../../pages/signUpPage'
import supportCenterPage from '../../pages/supportCenterPage'
import verifyEmailPage from '../../pages/verifyEmailPage'
import blogPage from '../../pages/blogPage'
import solutionsPage from '../../pages/solutionsPage'
import numbersPricingPage from '../../pages/numbersPricingPage'

//! fixtures
import supportCenterPageFixture from '../../fixtures/supportCenterPageFixture.json'
import blogPageFixture from '../../fixtures/blogPageFixture.json'
import solutionsPageFixture from '../../fixtures/solutionsPageFixture.json'
import globalNumbersFixture from '../../fixtures/globalNumbersFixture.json'

describe('Telnyx website', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    acceptCookiesHelper()
  })

  //! failing
  xit('1. should allow a user to sign up', () => {
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

  xit('6. should allow a user to sort articles on the "Blog" page', () => {
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

  xit('7. should show pagination on the "Blog" page', () => {
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

  xit('8. should allow a user to filter departments on the "Solutions" page', () => {
    //! navigation
    homePage.elements.navigation.solutionsLink().should('be.visible')
    homePage.clickOnSolutionsLink()

    //! solutions page
    cy.url().should('include', '/solutions')
    solutionsPage.elements
      .heading()
      .should('have.text', 'Solutions for scaling your business')
    solutionsPage.elements
      .heroOverviewText()
      .should(
        'have.text',
        'Learn how Telnyx products apply to your industry or use case.'
      )
    solutionsPage.elements.seeIndustriesLink().should('be.visible')
    solutionsPage.elements.seeUseCasesLink().should('be.visible')

    solutionsPage.clickOnSeeUseCasesLink()
    cy.url().should('include', '#use-cases')

    solutionsPage.elements
      .useCasesSectionStrongText()
      .contains(`use cases`, {
        matchCase: false,
      })
      .should('be.visible')

    solutionsPage.elements
      .useCasesSectionHeading()
      .should('be.visible')
      .and('have.text', 'Maintain control with custom, feature-rich tooling.')

    solutionsPage.elements
      .filterDropdownBtn()
      .should('be.visible')
      .and('have.text', 'Filter by department')

    solutionsPage.clickOnFilterDropdownBtn()
    solutionsPage.elements.filterDropdownList().should('be.visible')

    // !
    // solutionsPage.elements
    //   .filterDropdownListOptions()
    //   .first()
    //   .invoke('text')
    //   .then((text) => {
    //     cy.log('input = ' + text)
    //   })

    //!each
    solutionsPage.elements.filterDropdownListOptions().each((option) => {
      let currentOptionName = option.text().trim()
      let currentOptionHref = option.attr('href')

      cy.wrap(currentOptionHref).should(
        'contain',
        solutionsPageFixture[`${currentOptionName}`]
      )

      //! new

      // // solutionsPage.elements.filterDropdownBtn().scrollIntoView()
      // solutionsPage.clickOnFilterDropdownBtn()
      // option.click({ force: true })
      // // cy.wrap(option).click()
      // // cy.wrap(option).should('be.visible')
      // // option.click()

      // solutionsPage.elements
      //   .filterDropdownBtn()
      //   .should('have.text', `${currentOptionName}`)

      // // option.invoke('text').then((text) => {
      // //   cy.log('input = ' + text)
      // // })
      //! new
    })
  })

  // todo
  it('9. should allow a user to use filters on the "Numbers pricing" page', () => {
    //! navigation
    homePage.elements.navigation.pricingLink().should('be.visible')
    homePage.clickOnPricingLink()
    homePage.elements.subNavigation.globalNumbersLink().should('be.visible')
    homePage.clickOnGlobalNumbersLink()

    //! pricing-numbers page
    cy.url().should('include', '/pricing/numbers')
    numbersPricingPage.elements.heading().should('have.text', 'Numbers pricing')
    numbersPricingPage.elements
      .heroOverviewText()
      .should(
        'have.text',
        'Get flexible pricing for Local, National and Toll-free Numbers, with the option to pay as you go or volume-based pricing.'
      )

    numbersPricingPage.elements.payAsYouGoBoxLink().should('be.visible')
    numbersPricingPage.elements.volumeBasedPricingBoxLink().should('be.visible')

    numbersPricingPage.elements
      .countryFilterDropdownBtn()
      .should('be.visible')
      .and('have.text', 'United States')
    numbersPricingPage.elements
      .currencyFilterDropdownBtn()
      .should('be.visible')
      .and('have.text', 'USD')

    numbersPricingPage.elements.numberPricingTableCaption().should('be.visible')
    numbersPricingPage.elements.numberPricingTableData().should('contain', '$')

    numbersPricingPage.clickOnPayAsYouGoBoxLink()
    cy.url().should('include', '#pay-as-you-go')

    //! country dropdown
    numbersPricingPage.clickOnCountryFilterDropdownBtn() //!open dropdown
    numbersPricingPage.elements.countryFilterDropdownList().should('be.visible')

    // todo: fixture
    numbersPricingPage.selectCountryOption('Canada')
    cy.url().should('include', '/ca')
    numbersPricingPage.elements.heading().should('contain', 'Canada')
    numbersPricingPage.elements
      .countryFilterDropdownBtn()
      .should('have.text', 'Canada')

    //!currency dropdown
    numbersPricingPage.clickOnCurrencyFilterDropdownBtn()
    numbersPricingPage.elements
      .currencyFilterDropdownList()
      .should('be.visible')

    // todo: fixture
    numbersPricingPage.selectCurrencyOption('EUR')
    numbersPricingPage.elements.numberPricingTableData().should('contain', '€')
    numbersPricingPage.elements
      .currencyFilterDropdownBtn()
      .should('have.text', 'EUR')
  })
})
