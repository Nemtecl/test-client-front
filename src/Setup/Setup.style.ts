import styled from 'styled-components'

import { CardButton, IconButton, palette } from '@habx/ui-core'

export const SetupContainer = styled.div`
  padding: 64px;
`

export const LinkedinIcon = styled(IconButton)`
  &:hover {
    color: ${palette.purpleDawn[500]};
  }
`

export const Box = styled.div``

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SetupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FieldWrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Choices = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledCardButton = styled(CardButton)`
  margin: 0.5rem;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
