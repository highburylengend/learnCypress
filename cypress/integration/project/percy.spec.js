describe('TodoMVC', function() {
  beforeEach(function() {
    // Load our app before starting each test case
    cy.visit('vendhq.com');
  });

  it('home page', function() {
    cy.contains('button', 'Get started').should('exist');
    cy.percySnapshot();
  });
});
