class blogArticlePage {
  elements = {
    heading: () => cy.get('main h1'),
    subHeading: () => cy.get('main > article > div p').first(),

    backToBlogLink: () => cy.get('a span').contains('Back to blog'),
    publishedDate: () => cy.get('strong').contains('PUBLISHED'),
    authorName: () => cy.get('div [data-author-initials]+p').contains('By'),

    articleCategoryAndPublishDate: () => cy.get('main>article>div>div>strong'),
    articleTitle: () => cy.get('main>article>div h1'),
    shareOnSocialText: () => cy.get('span').contains('Share on Social'),
  }

  clickOnBackToBlogLink() {
    this.elements.backToBlogLink().should('be.visible')
    this.elements.backToBlogLink().click()
  }
}

module.exports = new blogArticlePage()
