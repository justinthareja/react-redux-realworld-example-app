describe('Conduit', function() {

  context('Home Page', function() {
    beforeEach(function(){
      // Visiting our app before each test removes any state build up from
      // previous tests. Visiting acts as if we closed a tab and opened a fresh one
      // An empty string defers to baseUrl found in cypress.json
      cy.visit('')
    })

    it('Should render a banner', function() {
      cy.get('div.banner').within(function() {
        cy.get('div.container').within(function() {
          cy.get('h1.logo-font').should('contain', 'conduit')
          cy.get('p').should('contain', 'A place to share your knowledge.')
        })
      })
    })
  })
})