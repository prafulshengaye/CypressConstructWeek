class SearchResultsPage {
    selectItem() {
      // Ensure the element is visible, scroll into view, and force-click if necessary
      cy.get('.s-item')
        .first()
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
    }
  }
  
  export default SearchResultsPage;
  
  