// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to fill an input
     * @param name data-test-id
     * @param value value to write
     * @param inputType type of the input
     * @example cy.fillInput('budget', 100)
     */
    fillInput(
      name: string,
      value: number | string,
      inputType?: string | undefined
    ): Chainable<any>

    /**
     * Custom command to pick choice
     * @param name data-test-id
     * @param values values to write
     * @example cy.fillInput('typology', [1])
     */
    pickChoices(name: string, values: string[]): void
  }
}
