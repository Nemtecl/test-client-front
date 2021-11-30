import { useMutation, useQuery } from '@apollo/client'
import { Field, Form } from 'react-final-form'

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Icon,
  LoaderDots,
  TextInput,
} from '@habx/ui-core'

import { ErrorText } from '../components'

import { projectMutation } from './Setup.mutation'
import { projectQuery } from './Setup.query'
import { mutators, pluralize } from './Setup.service'
import {
  ButtonContainer,
  CardBody,
  CardWrapper,
  Choices,
  FieldWrapper,
  LinkedinIcon,
  SetupContainer,
  SetupForm,
  StyledCardButton,
  TopBar,
} from './Setup.style'
import { FormValues, FormError } from './types/form'
import { project } from './types/project'

const Setup = () => {
  const { data, loading } = useQuery<project>(projectQuery)
  const [upsertSetup] = useMutation<boolean>(projectMutation)

  if (!data || loading) {
    return <LoaderDots />
  }

  const onSubmit = (values: FormValues) => {
    const { budget, surface, typology, exposures } = values
    const setup = {
      budget: +budget,
      surface: +surface,
      typology: +typology,
      exposures,
    }
    upsertSetup({
      variables: { setup },
    })
  }

  const {
    name,
    properties: { exposures, priceRange, surfaceRange, typologies },
  } = data.project

  const validateSetup = ({
    budget,
    exposures: vExposures,
    typology,
    surface,
  }: FormValues) => {
    let errors = {} as FormError

    // Exposures
    if ((vExposures || []).length === 0) {
      errors.exposures = 'You must pick at least one exposure'
    } else if (
      !vExposures.every((exposure: any) =>
        exposures.find((e) => e === exposure)
      )
    ) {
      errors.exposures = `Possible exposures values : ${exposures.join(', ')}`
    }

    // Typoligies
    if (!typologies.find((t) => t === +typology)) {
      errors.typology = `Possible typologies values : ${typologies.join(', ')}`
    }

    // Budget
    if (!budget) {
      errors.budget = `Required`
    } else if (budget < priceRange.min || budget > priceRange.max) {
      errors.budget = `Budget must be between ${priceRange.min} and ${priceRange.max}`
    }

    // Surface
    if (!surface) {
      errors.surface = `Required`
    } else if (surface < surfaceRange.min || surface > surfaceRange.max) {
      errors.surface = `Surface must be between ${surfaceRange.min} and ${surfaceRange.max}`
    }

    return errors
  }

  return (
    <SetupContainer>
      <TopBar>
        <Breadcrumb>
          <BreadcrumbItem>
            <Icon icon="house-building-outline" />
          </BreadcrumbItem>
          <BreadcrumbItem>{name}</BreadcrumbItem>
        </Breadcrumb>
        <LinkedinIcon
          icon="linkedin-filled"
          onClick={() => window.open(process.env.REACT_APP_LINKEDIN)}
        />
      </TopBar>
      <Form
        onSubmit={onSubmit}
        validate={validateSetup}
        mutators={mutators}
        render={({ handleSubmit, submitting, valid, form }) => (
          <SetupForm>
            <Field name="budget">
              {({ input, meta }) => (
                <FieldWrapper>
                  <TextInput
                    {...input}
                    type="number"
                    label="Budget"
                    elementRight="€"
                    error={!!meta.error && meta.dirty}
                    data-test-id="budget"
                  />
                  <ErrorText error={meta.error} dirty={meta.dirty} />
                </FieldWrapper>
              )}
            </Field>
            <Field name="surface">
              {({ input, meta }) => (
                <FieldWrapper>
                  <TextInput
                    {...input}
                    type="number"
                    label="Surface"
                    elementRight="m2"
                    error={!!meta.error && meta.dirty}
                    data-test-id="surface"
                  />
                  <ErrorText error={meta.error} dirty={meta.dirty} />
                </FieldWrapper>
              )}
            </Field>
            <Field name="typology">
              {({ input, meta }) => (
                <CardWrapper>
                  <Choices>
                    {typologies.map((typology) => (
                      <StyledCardButton
                        key={typology}
                        spacing="regular"
                        outline
                        active={typology === +input.value}
                        onClick={() => form.mutators.setTypology(typology)}
                        data-test-id={`typology-${typology}`}
                      >
                        {pluralize(`${typology} room`, typology)}
                      </StyledCardButton>
                    ))}
                  </Choices>
                  <ErrorText error={meta.error} dirty={meta.dirty} />
                </CardWrapper>
              )}
            </Field>
            <Field name="exposures">
              {({ input, meta }) => (
                <CardWrapper>
                  <Choices>
                    {exposures.map((exposure) => (
                      <StyledCardButton
                        key={exposure}
                        spacing="regular"
                        outline
                        active={(input.value || []).includes(exposure)}
                        onClick={() =>
                          form.mutators.setExposure(input.value, exposure)
                        }
                        data-test-id={`exposures-${exposure}`}
                      >
                        <CardBody>
                          <Icon icon={`arrow-${exposure}`} />
                          {exposure}
                        </CardBody>
                      </StyledCardButton>
                    ))}
                  </Choices>
                  <ErrorText error={meta.error} dirty={meta.dirty} />
                </CardWrapper>
              )}
            </Field>
            <ButtonContainer>
              <Button
                onClick={handleSubmit}
                data-test-id="submit-btn"
                disabled={submitting || !valid}
              >
                Valider
              </Button>
            </ButtonContainer>
          </SetupForm>
        )}
      ></Form>
    </SetupContainer>
  )
}

export default Setup
