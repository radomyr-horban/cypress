class integrationsPage {
  elements = {
    heading: () => cy.get('main h1'),
    heroOverviewText: () => cy.get('h2[class="description"]>p'),

    //! sections
    integrationsSection: () =>
      cy.get('div[class="sidebar-section collection-menu-section"]'),
    integrationsSectionTitle: () =>
      cy.get('div[class="sidebar-section collection-menu-section"] > h4'),
    // integrationsSectionList: () =>
    //   cy.get('div[class="sidebar-section collection-menu-section"] > ul'),
    integrationsSectionListItems: () =>
      cy.get(
        'div[class="sidebar-section collection-menu-section"] > ul > li a'
      ),

    categoriesSection: () =>
      cy.get('div[class="sidebar-section category-menu-section"]'),
    categoriesSectionTitle: () =>
      cy.get('div[class="sidebar-section category-menu-section"] > h4'),
    // categoriesSectionList: () =>
    //   cy.get('div[class="sidebar-section category-menu-section"] > ul'),
    categoriesSectionListItems: () =>
      cy.get('div[class="sidebar-section category-menu-section"] > ul > li a'),
  }
}

module.exports = new integrationsPage()
