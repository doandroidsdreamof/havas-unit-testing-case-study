/// <reference types="cypress" />
import cypress from 'cypress/react18';

describe('Button click counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('clicks buttons and counts clicks', () => {
    let clicks = 0;
    //* teste odaklanıldığı için hard-coded  //
    let buttonsLength = 100;
    cy.get('.testCount')
      .each(($button) => {
        cy.wrap($button).click();
        clicks++;
      })
      .then(() => {
        expect(clicks).to.equal(buttonsLength);
      });
  });
});
