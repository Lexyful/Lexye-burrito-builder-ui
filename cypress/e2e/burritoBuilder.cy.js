//.1 As a user I should see the Burrito page with a form, ingredient buttons, a submit button and existing orders.

//.2 As a user I should be able to fill out the form and choose multiple ingredients to go inside my burrito

//.3 As a user I should be able to submit my order and view it along side the  other orders

describe('Burrito Builder', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders',{

      fixture: "burritos.json"
    })
    cy.visit('http://localhost:3000/')
  })

  //As a user I should see the Burrito page with a form, ingredient buttons, a submit button and existing orders.

it('should show the title', () => {
    cy.get('h1').contains('Burrito Builder')
  })
it('should show a form to with a name input feild.', () => {
    cy.get('form').should('be.visible')
    cy.get('[name="name"]').should('be.visible')
    cy.get('[placeholder="Name"]').should('be.visible')

})

it('should show ingredient buttons and a submit button', () => {
  cy.get('button').get('[name="beans"]')
  cy.get('button').get('[name="steak"]')
  cy.get('button').get('[name="carnitas"]')
  cy.get('button').get('[name="sofritas"]')
  cy.get('button').get('[name="lettuce"]')
  cy.get('button').contains('Submit Order')
  cy.get('button').should('length', 13)
})

it('should show existing orders, with the orderers names', () => {
  cy.get('section')
  cy.get('section > :nth-child(1)')
  cy.get(':nth-child(1) > h3').contains('Pat')
  cy.get('section > :nth-child(2)').contains('Sam')
  cy.get('section > :nth-child(3)').contains('Alex')
})

//As a user I should be able to fill out the form and choose multiple ingredients to go inside my burrito

it('should allow the user to fill out the form', () => {
  cy.get('form').should('be.visible')
  cy.get('[name="name"]').should('be.visible')
  cy.get('[placeholder="Name"]').type('Lexye')
  cy.get('button').get('[name="beans"]').click()
  cy.get('button').get('[name="steak"]').click()
})

//As a user I should be able to submit my order and view it along side the  other orders

it('should be able to order a burrito', () => {
  cy.intercept('POST',
  'http://localhost:3001/api/v1/orders',{
    statusCode: 201,
    body:{
      "id": 1,
      "name": "Bianca Del Rio",
      "ingredients": [
        "beans",
        "lettuce",
        "carnitas",
        "queso fresco",
        "jalapeno"
      ]
    }
  })
  cy.visit('http://localhost:3000/')
    cy.get('form').should('be.visible')
    cy.get('[name="name"]').should('be.visible')
    cy.get('[placeholder="Name"]').type('Bianca Del Rio')
    cy.get('button').get('[name="beans"]').click()
    cy.get('button').get('[name="steak"]').click()
    cy.get('button').contains('Submit Order').click()

    cy.get('section')
    cy.get('section > :nth-child(1)')
    cy.get(':nth-child(1) > h3').contains('Pat')
    cy.get('section > :nth-child(2)').contains('Sam')
    cy.get('section > :nth-child(3)').contains('Alex')
    cy.get('section > :nth-child(4)')
   
})

})

