class homePage {
  elements = {
    signUpBtn: () => cy.get('#header-sign-up > span').first(),
  }

  clickOnSignUpBtn() {
    this.elements.signUpBtn().click()
  }
}

module.exports = new homePage()
