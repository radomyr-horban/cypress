class signUpPage {
  elements = {
    emailInput: () => cy.get('input[id=email]'),
    firstNameInput: () => cy.get('input[id=first_name]'),
    lastNameInput: () => cy.get('input[id=last_name]'),
    passwordInput: () => cy.get('input[id=password]'),
    termsAndConditionsCheckbox: () => cy.get('input[id=terms_and_conditions]'),
    signUpBtn: () =>
      cy.get('form[aria-label="signup-form"] button[type=submit]'),
  }

  //! setters
  setEmailInput(value) {
    this.elements.emailInput().type(value)
  }
  setFirstNameInput(value) {
    this.elements.firstNameInput().type(value)
  }
  setLastNameInput(value) {
    this.elements.lastNameInput().type(value)
  }
  setPasswordInput(value) {
    this.elements.passwordInput().type(value)
  }

  //! clickers
  clickOnEmailInput() {
    this.elements.emailInput().click()
  }
  clickOnFirstNameInput() {
    this.elements.firstNameInput().click()
  }
  clickOnLastNameInput() {
    this.elements.lastNameInput().click()
  }
  clickOnPasswordInput() {
    this.elements.passwordInput().click()
  }

  clickOnTermsAndConditionsCheckbox() {
    this.elements.termsAndConditionsCheckbox().click()
  }

  clickOnSignUpBtn() {
    this.elements.signUpBtn().click()
  }
}

module.exports = new signUpPage()
