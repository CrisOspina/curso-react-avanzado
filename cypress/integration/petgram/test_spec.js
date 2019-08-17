/* global describe, it, cy */

describe('Petgram', function () {
  it('Para ver si funciona', function () {
    cy.visit('/')
  })

  it('Navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Los usuario no registrados ven el formulario de registro e inicio de sesión al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
