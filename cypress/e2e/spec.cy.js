
describe('Burrito BUilder', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', 
    { 
      fixture: 'burrito.json' 
    })
    cy.visit('http://localhost:3000/')
  })


  it('should see the name of the page', () => {
    cy.get('header').contains('Burrito Builder')
  })
})