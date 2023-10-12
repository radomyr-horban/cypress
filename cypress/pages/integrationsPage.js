class integrationsPage {
  elements = {
    heading: () => cy.get('main h1'),
    heroOverviewText: () => cy.get('h2[class="description"]>p'),

    integrationsSection: () =>
      cy.get('div[class="sidebar-section collection-menu-section"]'),
    integrationsSectionTitle: () =>
      cy.get('div[class="sidebar-section collection-menu-section"] > h4'),
    integrationsSectionListItems: () =>
      cy.get(
        'div[class="sidebar-section collection-menu-section"] > ul > li a'
      ),

    categoriesSection: () =>
      cy.get('div[class="sidebar-section category-menu-section"]'),
    categoriesSectionTitle: () =>
      cy.get('div[class="sidebar-section category-menu-section"] > h4'),
    categoriesSectionListItems: () =>
      cy.get('div[class="sidebar-section category-menu-section"] > ul > li a'),
  }
}

module.exports = new integrationsPage()
