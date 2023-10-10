class homePage {
  elements = {
    signUpBtn: () => cy.get('#header-sign-up > span').first(),

    navigation: {
      resourcesLink: () => cy.get('nav').contains('Resources'),
      solutionsLink: () => cy.get('nav').contains('Solutions'),
      pricingLink: () => cy.get('nav').contains('Pricing'),
      whyTelnyxLink: () => cy.get('nav').contains('Why Telnyx'),
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
    },
  }

  //! clickers
  clickOnSignUpBtn() {
    this.elements.signUpBtn().click()
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
}

module.exports = new homePage()
