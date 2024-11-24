class HomePage {
    visit() {
      cy.visit('https://www.ebay.com/');
    }
  
    searchForItem(item) {
      cy.get('#gh-ac').type(item); // Search input
      cy.get('#gh-btn').click();  // Search button
    }
  
    goToSignIn() {
      cy.get('a[title="Sign in"]').click();
    }
  }
  
  export default HomePage;
  
  