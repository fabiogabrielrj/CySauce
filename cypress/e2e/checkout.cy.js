describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('.shopping_cart_link').click();
  });

  it('Deve finalizar a compra com sucesso', () => {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Jose ');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('22750013');
    cy.get('[data-test="continue"]').click();

    cy.contains('Checkout: Overview').should('be.visible');
    cy.get('[data-test="finish"]').click();

    cy.contains('Thank you for your order!').should('be.visible');
  });
});
