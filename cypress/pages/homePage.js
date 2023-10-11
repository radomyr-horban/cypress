class homePage {
  elements = {
    signUpBtn: () => cy.get('#header-sign-up > span').first(),

    navigation: {
      resourcesLink: () => cy.get('nav').contains('Resources'),
      solutionsLink: () => cy.get('nav').contains('Solutions'),
      pricingLink: () => cy.get('nav').contains('Pricing'),
      whyTelnyxLink: () => cy.get('nav').contains('Why Telnyx'),
      productsLink: () => cy.get('nav').contains('Products'),
    },

    subNavigation: {
      supportCenterLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Support Center')
          .invoke('removeAttr', 'target'),
      blogLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Blog')
          .invoke('removeAttr', 'target'),
      globalNumbersLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Global Numbers')
          .invoke('removeAttr', 'target'),
      integrationsLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Integrations')
          .invoke('removeAttr', 'target'),
      microsoftTeamsLink: () =>
        cy
          .get('[role="menuitem"]')
          .contains('Microsoft Teams')
          .invoke('removeAttr', 'target'),
    },

    footer: {
      // footerSocialMediaLinks: () => cy.get('footer a > svg > title'),
      footerSocialMediaLinks: () =>
        cy.get('footer [rel="noopener noreferrer"]'),

      footerLogo: () => cy.get('footer svg > g'),
      releaseNotesLink: () => cy.get('footer a[href="/release-notes"]'),
    },
  }

  //! clickers
  clickOnSignUpBtn() {
    this.elements.signUpBtn().click()
  }
  clickOnFooterLogo() {
    this.elements.footerLogo().click()
  }

  //! navigation
  clickOnResourcesLink() {
    this.elements.navigation.resourcesLink().click()
  }
  clickOnSolutionsLink() {
    this.elements.navigation.solutionsLink().click()
  }
  clickOnPricingLink() {
    this.elements.navigation.pricingLink().click()
  }
  clickOnWhyTelnyxLink() {
    this.elements.navigation.whyTelnyxLink().click()
  }
  clickOnProductsLinkLink() {
    this.elements.navigation.productsLink().click()
  }

  //! footer
  clickOnReleaseNotesLink() {
    this.elements.footer.releaseNotesLink().click()
  }

  //! sub-navigation
  clickOnSupportCenterLink() {
    this.elements.subNavigation.supportCenterLink().click()
  }
  clickOnBlogLink() {
    this.elements.subNavigation.blogLink().click()
  }
  clickOnGlobalNumbersLink() {
    this.elements.subNavigation.globalNumbersLink().click()
  }
  clickOnIntegrationsLink() {
    this.elements.subNavigation.integrationsLink().click()
  }
  clickOnMicrosoftTeamsLink() {
    this.elements.subNavigation.microsoftTeamsLink().click()
  }
}

module.exports = new homePage()
