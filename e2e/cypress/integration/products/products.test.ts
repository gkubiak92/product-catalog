/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Products page should', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/product*', 'fixture:products.json');
    cy.route('GET', '/product*?promo=true', 'fixture:promoProducts.json');
    cy.route('GET', '/product*?active=true', 'fixture:activeProducts.json');
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

  it('filter active products properly', () => {
    cy.clearSession();
    cy.get('input[name="Active"]').check().should('be.checked');
    cy.get('MuiGrid-root').find('.MuiCard-root').should('have.length.2');
  });
});
