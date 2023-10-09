class homePage {
  elements = {
    signUpBtn: () => cy.get('#header-sign-up > span').first(),

    navigation: {
      resourcesLink: () => cy.get('nav').contains('Resources'),
      solutionsLink: () => cy.get('nav').contains('Solutions'),
      pricingLink: () => cy.get('nav').contains('Pricing'),
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
}

module.exports = new homePage()
