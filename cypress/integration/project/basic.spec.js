/// <reference types="Cypress" />

describe('basic testing cases', () => {
  it('should be able to access the website', () => {
    cy.visit('http://example.com');
    cy.url().should('include', 'example');
    cy.wait(3000);
    // cy.pause();
    cy.contains('This domain is for use');
    cy.get('a[href]').should('be.visible');
  });

  it('interact with buttons', () => {
    cy.visit('https://demoqa.com/buttons');
    cy.url().should('include', 'buttons');

    cy.get('button:contains("Click Me")').should('have.length', 3);

    // cy.get('button:contains("Click Me")')
    //   .its('length')
    //   .should('eq', 3);

    // not working, why?
    // cy.get('button')
    //   .contains('Click Me')
    //   .click();

    // still doesn't work
    // cy.contains('Click Me')
    //   .last()
    //   .click();

    // this is working
    cy.get('button:contains("Click Me")')
      .last()
      .click();
    cy.contains('You have done a dynamic click').should('be.visible');

    // either of next three line works
    // cy.get('button:contains("Double Click Me")')
    // cy.contains('Double Click Me')
    // cy.get('button')
    //   .contains('Double Click Me')
    //   .dblclick();
    // cy.contains('You have done a double click').should('be.visible');
  });

  it('click hidden elements', () => {
    cy.visit('https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp');
    cy.get('button')
      .contains('Toggle Hide and Show')
      .click();

    cy.wait(1000);

    // test case failed at this step
    cy.get('div')
      .contains('Click the button!')
      .click();

    // let's add a {force: true} parameter
    // cy.get('div')
    //   .contains('Click the button!')
    //   .click({ force: true });
  });

  it('click hidden elements', () => {
    cy.visit('https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp');
    for (let i = 0; i < 9; i++) {
      cy.log('click the button:' + i.toString());
      console.log('click the button now!!');
      cy.get('button')
        .contains('Toggle Hide and Show')
        .click();
      cy.wait(1000);
    }

    // test case failed at this step
    // cy.get('div')
    //   .contains('Click the button!')
    //   .click();

    // let's add a {force: true} parameter
    cy.get('div')
      .contains('Click the button!')
      .click({ force: true });
  });

  it('successful login with correct credentials', () => {
    cy.visit('https://demoqa.com/login');
    cy.get('#userName')
      .clear()
      .type('123456@gmail.com');
    cy.get('#userName')
      .clear()
      .type('helloworld@outlook.com');
    cy.get('#password').type('abcpassword');
    cy.get('button#login').click();
  });

  it('chained assertion', () => {
    cy.visit('zero.webappsecurity.com/login.html');
    cy.contains('Sign in').click();
    // cy.get('.alert-error')
    //   .should('be.visible')
    //   .and('contain', 'Login and/or password are wrong');

    cy.get('.alert-error').should('be.visible');

    cy.get('.alert-error').should('contain', 'Login and/or password are wrong');
  });

  it('successful login with correct credentials', () => {
    cy.visit('https://demoqa.com/login');
    cy.get('#userName')
      .clear()
      .type('123456@gmail.com');
    // cy.get('#userName').type('helloworld@outlook.com');
    cy.get('#password').type('abcpassword');
    cy.get('button#login').click();
  });

  it('dropdown and radio box interactions', () => {
    cy.visit(
      'http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
    );
    cy.get('#dropdowm-menu-1').select('Python');
    cy.get('#dropdowm-menu-1').should('have.value', 'python');
    cy.get('#dropdowm-menu-1')
      .invoke('val')
      .should('contain', 'python');
    cy.get('#dropdowm-menu-1').contains('Python');

    cy.wait(1000);

    cy.get('#checkboxes input[value="option-2"]').click();
    cy.get('#checkboxes input[value="option-2"]').should('be.checked');

    cy.wait(1000);

    cy.get('#radio-buttons input[value="yellow"]').click();

    cy.wait(1000);

    cy.get('#radio-buttons-selected-disabled input[value="cabbage"]').should(
      'be.disabled'
    );
  });

  it.only('scrolling on the page ', () => {
    cy.visit('https://github.com/cypress-io/cypress');
    // if you click an element which is invisible you don't need to scroll it into view beforehand. Cypress do it for you.
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');
    cy.wait(2000);
    cy.scrollTo(0, 2000);
    cy.wait(2000);
    cy.contains('Please see our').scrollIntoView();
    cy.wait(2000);
  });
});
