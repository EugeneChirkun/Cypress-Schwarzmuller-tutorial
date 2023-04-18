/// <reference types='Cypress' />

describe('contact form', () => {
    it('should submit the form', () => {
cy.visit('http://localhost:5173/about');
cy.get('[data-cy="contact-input-message"]').type('Hi there!');
cy.get('[data-cy="contact-input-name"]').type('Johnatan Beaver');
cy.get('[data-cy="contact-input-email"]').type('email@example.com');

cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
cy.get('@submitBtn').contains('Send Message');
cy.get('@submitBtn').click();
cy.get('@submitBtn').contains('Sending...');
cy.get('@submitBtn').should('have.attr', 'disabled');
 });

 it('should submit the form using ENTER button', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('[data-cy="contact-input-message"]').type('Hi there!');
    cy.get('[data-cy="contact-input-name"]').type('Johnatan Beaver');
    cy.get('[data-cy="contact-input-email"]').type('email@example.com{enter}');
    
    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    cy.get('@submitBtn').contains('Send Message');
    cy.get('@submitBtn').click();
    cy.get('@submitBtn').contains('Sending...');
    cy.get('@submitBtn').should('have.attr', 'disabled');
     });

     it('should validate the form input', () => {
        cy.visit('http://localhost:5173/about');
        
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
        cy.get('@submitBtn').click();
        cy.get('@submitBtn').then(el => {
            expect(el).to.not.have.attr('disabled');
            expect(el.text()).to.not.equal('Sending...');
        });
    cy.get('@submitBtn').contains('Send Message');

    cy.get('[data-cy="contact-input-message"]').as('msgInput');
    cy.get('@msgInput').focus().blur();
    cy.get('@msgInput')
    .parent()
    .should('have.attr', 'class')
    .and('match', /invalid/);

    cy.get('[data-cy="contact-input-name"]').focus().blur();
    cy.get('[data-cy="contact-input-name"]')
    .parent()
    .should('have.attr', 'class')
    .and('match', /invalid/);

    cy.get('[data-cy="contact-input-email"]').focus().blur();
    cy.get('[data-cy="contact-input-email"]')
    .parent()
    .should('have.attr', 'class')
    .and('match', /invalid/);
});

}); 