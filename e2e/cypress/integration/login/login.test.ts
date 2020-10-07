/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Login page should', () => {
  beforeEach(() => {
    cy.server();
    cy.route('POST', '/login*', 'fixture:login.json').as('apiLoginCheck');
    cy.route('GET', '/product*', 'fixture:products.json');
    cy.visit(NavigationMenu.loginLink);
  });

  it('login properly', () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });

    cy.get('#username').type('user');

    cy.get('#password').type('password');

    cy.get('form').contains('Log in').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });
});
