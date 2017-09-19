describe('Conduit', function() {

  context('Home Page', function() {

    it('should render a banner', function() {
      // an empty string defers to baseUrl in config
      cy.visit('')
      cy.get('.banner').should('exist')
    })

  })

})