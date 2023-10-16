import microsoftTeamsPage from '../pages/microsoftTeamsPage'

// todo: extend `page` class (reuse page class methods)
export async function createDefaultUser(userData) {
  microsoftTeamsPage.clickOnFirstNameInput()
  microsoftTeamsPage.setFirstNameInput(userData.firstName)

  microsoftTeamsPage.clickOnLastNameInput()
  microsoftTeamsPage.setLastNameInput(userData.lastName)

  microsoftTeamsPage.clickOnCompanyEmailInput()
  microsoftTeamsPage.setCompanyEmailInput(userData.email)

  microsoftTeamsPage.clickOnCompanyWebsiteInput()
  microsoftTeamsPage.setCompanyWebsiteInput(userData.website)

  microsoftTeamsPage.selectOperator('0-50')

  microsoftTeamsPage.clickOnSubmitBtn()
}
