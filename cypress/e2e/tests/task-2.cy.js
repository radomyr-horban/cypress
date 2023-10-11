// / <reference types="cypress" />

import { acceptCookiesHelper } from '../../helpers/acceptCookies.helper'
import { createDefaultUser } from '../../helpers/createDefaultUser.helper'
import { generateUserData } from '../../helpers/generateUserData.helper'

import homePage from '../../pages/homePage'
import supportCenterPage from '../../pages/supportCenterPage'
import blogPage from '../../pages/blogPage'
import solutionsPage from '../../pages/solutionsPage'
import numbersPricingPage from '../../pages/numbersPricingPage'
import integrationsPage from '../../pages/integrationsPage'
import microsoftTeamsPage from '../../pages/microsoftTeamsPage'
import releaseNotesPage from '../../pages/releaseNotesPage'
import thankYouPage from '../../pages/thankYouPage'
import blogArticlePage from '../../pages/blogArticlePage'

//! fixtures
import supportCenterPageFixture from '../../fixtures/supportCenterPage.fixture.json'
import blogPageFixture from '../../fixtures/blogPage.fixture.json'
import solutionsPageFixture from '../../fixtures/solutionsPage.fixture.json'
// import globalNumbersFixture from '../../fixtures/globalNumbers.fixture.json'
import integrationsPageFixture from '../../fixtures/integrationsPage.fixture.json'
import homePageFixture from '../../fixtures/homePage.fixture.json'
import releaseNotesPageFixture from '../../fixtures/releaseNotesPage.fixture.json'

describe('Telnyx website', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    acceptCookiesHelper()
  })

  it('1. should allow a user to submit a form on the "Microsoft Teams" page ', () => {
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

  //! Footer - занадто маленький тест кейс
  xit('should dipslay social media links in footer', () => {
    // homePage.clickOnSignUpBtn()

    homePage.elements.footer.footerSocialMediaLinks().each((link) => {
      cy.wrap(link).should('be.visible')
    })

    //!
    cy.verifyListItemsTitles(
      homePage.elements.footer.footerSocialMediaLinks(),
      homePageFixture.footerLinksHfref
    )

    //! hrefs
    cy.verifyListItemsHrefs(
      homePage.elements.footer.footerSocialMediaLinks(),
      homePageFixture.footerLinksHfref
    )

    //! hover
    homePage.elements.footer.footerSocialMediaLinks().each((link) => {
      cy.wrap(link).trigger('mouseover') // Simulate the mouseover event
      // .should('have.css', 'background-color', '#4242EF')
      // cy.lg(link)

      // cy.wrap(link).should('be.visible')
    })

    //! footer logo
    homePage.elements.footer
      .footerLogo()
      .should('be.visible')
      .and('have.attr', 'href', '/')
    homePage.clickOnFooterLogo()
  })

  it('4. should allow a user to search the website', () => {
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

  it('7. should display main elements on the "Blog" article page', () => {
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

  it('8. should allow a user to filter departments on the "Solutions" page', () => {
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

  it('10. should allow a user to use filters on the "Integrations" page', () => {
    //! navigation
    homePage.elements.navigation.whyTelnyxLink().should('be.visible')
    homePage.clickOnWhyTelnyxLink()
    homePage.elements.subNavigation.integrationsLink().should('be.visible')
    homePage.clickOnIntegrationsLink()

    // //! pricing-numbers page
    cy.url().should('include', '/marketplace')
    integrationsPage.elements
      .heading()
      .should('be.visible')
      .and('have.text', 'Welcome to the Telnyx Integration Marketplace')
    integrationsPage.elements
      .heroOverviewText()
      .should('be.visible')
      .and('have.text', 'Add Telnyx products to your favorite software')

    //!categories
    integrationsPage.elements
      .integrationsSectionTitle()
      .should('be.visible')
      .and('have.text', 'Integrations')
    integrationsPage.elements
      .categoriesSectionTitle()
      .should('be.visible')
      .and('have.text', 'Categories')

    //! titles
    cy.verifyListItemsTitles(
      integrationsPage.elements.integrationsSectionListItems(),
      integrationsPageFixture.objectIntegrations
    )
    cy.verifyListItemsTitles(
      integrationsPage.elements.categoriesSectionListItems(),
      integrationsPageFixture.objectCategories
    )

    //! hrefs
    cy.verifyListItemsHrefs(
      integrationsPage.elements.integrationsSectionListItems(),
      integrationsPageFixture.objectIntegrations
    )
    cy.verifyListItemsHrefs(
      integrationsPage.elements.categoriesSectionListItems(),
      integrationsPageFixture.objectCategories
    )
  })
})
