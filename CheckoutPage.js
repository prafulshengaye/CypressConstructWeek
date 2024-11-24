class CheckoutPage {
    proceedToCheckout() {
      cy.get('.proceed-to-checkout').click();
    }
  }
  
  export default CheckoutPage;
  