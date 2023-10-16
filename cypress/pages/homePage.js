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
    this.elements.navigation.resourcesLink().should('be.visible')
    this.elements.navigation.resourcesLink().click()
  }
  clickOnSolutionsLink() {
    this.elements.navigation.solutionsLink().should('be.visible')
    this.elements.navigation.solutionsLink().click()
  }
  clickOnPricingLink() {
    this.elements.navigation.pricingLink().should('be.visible')
    this.elements.navigation.pricingLink().click()
  }
  clickOnWhyTelnyxLink() {
    this.elements.navigation.whyTelnyxLink().should('be.visible')
    this.elements.navigation.whyTelnyxLink().click()
  }
  clickOnProductsLinkLink() {
    this.elements.navigation.productsLink().should('be.visible')
    this.elements.navigation.productsLink().click()
  }

  //! footer
  clickOnReleaseNotesLink() {
    this.elements.footer.releaseNotesLink().should('be.visible')
    this.elements.footer.releaseNotesLink().click()
  }

  //! sub-navigation
  clickOnSupportCenterLink() {
    this.elements.subNavigation.supportCenterLink().should('be.visible')
    this.elements.subNavigation.supportCenterLink().click()
  }
  clickOnBlogLink() {
    this.elements.subNavigation.blogLink().should('be.visible')
    this.elements.subNavigation.blogLink().click()
  }
  clickOnGlobalNumbersLink() {
    this.elements.subNavigation.globalNumbersLink().should('be.visible')
    this.elements.subNavigation.globalNumbersLink().click()
  }
  clickOnIntegrationsLink() {
    this.elements.subNavigation.integrationsLink().should('be.visible')
    this.elements.subNavigation.integrationsLink().click()
  }
  clickOnMicrosoftTeamsLink() {
    this.elements.subNavigation.microsoftTeamsLink().should('be.visible')
    this.elements.subNavigation.microsoftTeamsLink().click()
  }
}

module.exports = new homePage()
