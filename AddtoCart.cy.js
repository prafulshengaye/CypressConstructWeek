import HomePage from '../../pages/HomePage';
import SearchResultsPage from '../../pages/SearchResultsPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('eBay Checkout Functionality', () => {
  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();
  const checkoutPage = new CheckoutPage();

  it('should add an item to the cart and proceed to checkout', () => {
    homePage.visit();
    homePage.searchForItem('Smartphone');
    searchResultsPage.selectItem();
    cy.get('#atcRedesignId_btn').click(); // Add to cart button
    cy.get('.vi-VR-btnWdth-XL').click(); // Go to checkout button
    checkoutPage.proceedToCheckout();
    cy.url().should('include', '/checkout/');
  });
});
