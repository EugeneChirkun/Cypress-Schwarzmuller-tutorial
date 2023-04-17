/// <reference types='Cypress' />

describe('contact form', () => {
    it('should submit the form', () => {
cy.visit('http://localhost:5173/about');
cy.get('[data-cy="contact-input-message"]').type('Hi there!');
cy.get('[data-cy="contact-input-name"]').type('Johnatan Beaver');
cy.get('[data-cy="contact-input-email"]').type('email@example.com');
cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
cy.get('[data-cy="contact-btn-submit"]').click();
cy.get('[data-cy="contact-btn-submit"]').contains('Sending...');
cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');
 });
}); 