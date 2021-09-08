describe('Percy Integration', function() {
  beforeEach(function() {
    // Load our app before starting each test case
    cy.visit('https://www.vendhq.com/nz/');
  });

  it('home page', function() {
    cy.contains('button', 'Get started').should('exist');
    cy.percySnapshot();
  });
});
