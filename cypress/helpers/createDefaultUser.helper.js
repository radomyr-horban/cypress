// TODO: transform into a class

import signUpPage from '../pages/signUpPage'

// export async function createDefaultUser(signUpPage, userData) {
export async function signUpDefaultUser(userData) {
  signUpPage.clickOnEmailInput()
  signUpPage.setEmailInput(userData.email)

  signUpPage.clickOnFirstNameInput()
  signUpPage.setFirstNameInput(userData.firstName)

  signUpPage.clickOnLastNameInput()
  signUpPage.setLastNameInput(userData.firstName)

  signUpPage.clickOnPasswordInput()
  signUpPage.setPasswordInput(userData.password)

  signUpPage.clickOnTermsAndConditionsCheckbox()

  signUpPage.clickOnSignUpBtn()
}
