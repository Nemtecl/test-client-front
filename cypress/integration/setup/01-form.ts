describe('Setup form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should fill the form and be ✅', () => {
    cy.fillInput('budget', 156789)
    cy.fillInput('surface', 70)
    cy.pickChoices('typology', ['2'])
    cy.pickChoices('exposures', ['north', 'east'])

    cy.get('button[data-test-id="submit-btn"]').click()
    cy.get('div[data-testid="notification-text"]').should(
      'have.text',
      'Setup inserted ! ✅'
    )
  })

  it('Should fill the form and be ❌', () => {
    cy.fillInput('budget', 12500)
    cy.fillInput('surface', 10)
    cy.pickChoices('typology', ['2'])
    cy.pickChoices('exposures', ['north', 'east'])

    cy.get('button[data-test-id="submit-btn"]').should('be.disabled')
  })
})
