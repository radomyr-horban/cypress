class homePage {
  elements = {
    signUpBtn: () => cy.get('#header-sign-up > span').first(),

    navigation: {
      resourcesLink: () => cy.get('nav').contains('Resources'),
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
    },
  }

  //!navigation
  clickOnResourcesLink() {
    this.elements.navigation.resourcesLink().click()
  }
  clickOnSupportCenterLink() {
    this.elements.subNavigation.supportCenterLink().click()
  }
  clickOnBlogLink() {
    this.elements.subNavigation.blogLink().click()
  }

  clickOnSignUpBtn() {
    this.elements.signUpBtn().click()
  }
}

module.exports = new homePage()
