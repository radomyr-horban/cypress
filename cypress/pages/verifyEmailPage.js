class verifyEmailPage {
  elements = {
    // heading: () => cy.xpath('//h1/span[text()="One last step"]'), //!xpath doesn't work in cypress??
    heading: () => cy.get('h1>span'),
    descriptionText: () => cy.contains('confirm your email'),
    contactUsLink: () => cy.get('p > a[href="/contact-us"]'),
  }
}

module.exports = new verifyEmailPage()
