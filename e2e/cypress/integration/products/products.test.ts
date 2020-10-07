import { AppRoute } from '../../../../src/routing/AppRoute.enum';
/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('HomePage should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('Displays products page', () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get('#productsPage');
  });

  it('Should have login button', () => {
    cy.clearSession();
    cy.get('header').contains('Log In');
  });
});
