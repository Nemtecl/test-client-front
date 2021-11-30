import gql from 'graphql-tag'

export const projectMutation = gql`
  mutation upsertSetup($setup: SetupInput!) {
    upsertSetup(setup: $setup)
  }
`
