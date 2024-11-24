import HomePage from '../../pages/HomePage';
import SearchResultsPage from '../../pages/SearchResultsPage';

describe('eBay Search and Navigation Test', () => {
  it('should search for an item and navigate to its details page', () => {
    // Visit eBay homepage
    cy.visit('https://www.ebay.com');

    // Search for an item (e.g., Laptop)
    cy.get('#gh-ac').type('Laptop'); // Type the search keyword
    cy.get('#gh-btn').click(); // Click the search button

    // Wait for the search results to load and click the first result
    cy.get('.s-item') // Target the search results
      .first()
      .find('a') // Find the first clickable link in the search result
      .should('have.attr', 'href') // Ensure it has an href attribute
      .then((href) => {
        // Visit the item's URL directly to handle new tab issues
        cy.visit(href);
      });

    // Verify that the URL includes "/itm/" to confirm navigation to the item page
    cy.url({ timeout: 10000 }).should('include', '/itm/');
  });
});

