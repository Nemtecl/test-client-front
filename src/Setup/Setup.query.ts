import gql from 'graphql-tag'

import { rangeFragment } from './Setup.fragment'

export const projectQuery = gql`
  query project {
    project {
      id
      name
      properties {
        exposures
        typologies
        priceRange {
          ...range
        }
        surfaceRange {
          ...range
        }
      }
    }
  }
  ${rangeFragment}
`
