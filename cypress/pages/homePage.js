class homePage {
  elements = {
    signUpBtn: () => cy.get('#header-sign-up > span').first(),

    navigation: {
      resourcesLink: () => cy.get('nav').contains('Resources'),
    },

    subNavigation: {
      supportCenterLink: () =>
        cy
          // .get('[role="menuitem"] a[href="https://support.telnyx.com/en/"]')
          .get('[role="menuitem"]')
          .contains('Support Center') //! span - NOT link???
          .invoke('removeAttr', 'target'), //! Can I use this workaround??
    },
  }

  //!navigation
  clickOnResourcesLink() {
    this.elements.navigation.resourcesLink().click()
  }
  clickOnSupportCenterLink() {
    this.elements.subNavigation.supportCenterLink().click()
  }

  clickOnSignUpBtn() {
    this.elements.signUpBtn().click()
  }
}

module.exports = new homePage()
