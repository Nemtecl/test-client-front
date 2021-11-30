import gql from 'graphql-tag'

export const rangeFragment = gql`
  fragment range on Range {
    min
    max
  }
`
