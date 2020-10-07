/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('Products page should', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/product*', 'fixture:products/products.json');
    cy.route('GET', '/product*?promo=true', 'fixture:products/promoProducts.json');
    cy.route('GET', '/product*?active=true', 'fixture:products/activeProducts.json');
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
    cy.get('[data-test-id="productCard"]').should('have.length', 2);
    cy.contains('Show details').children().should('have.length', 2);
  });

  it('filter promo products properly', () => {
    cy.clearSession();
    cy.get('input[name="Promo"]').check().should('be.checked');
    cy.get('[data-test-id="productCard"]').should('have.length', 8);
  });

  it('search proper product', () => {
    cy.clearSession();
    cy.get('#searchbar').find('input').type('Car');
    cy.get('#searchbar').find('form').submit();
    cy.get('[data-test-id="productCard"]').contains('Car').should('have.length', 1);
  });
});
