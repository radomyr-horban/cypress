class thankYouPage {
  elements = {
    heading: () => cy.get('main h1'),
    heroOverviewText: () => cy.get('main > section > div > div > p'),
  }
}

module.exports = new thankYouPage()
