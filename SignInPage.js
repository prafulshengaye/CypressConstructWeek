class SignInPage {
    enterCredentials(email, password) {
      cy.get('#userid').type(email);
      cy.get('#pass').type(password);
      cy.get('#sgnBt').click();
    }
  }
  
  export default SignInPage;
  