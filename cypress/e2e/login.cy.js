describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('Não deve logar com credenciais inválidas', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain', 'Epic sadface');
  });
});
