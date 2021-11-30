import { MutableState, Tools } from 'final-form'

import { FormValues } from './types/form'

export const addOrRemove = <T>(array: T[], item: T) => {
  const exists = array.includes(item)

  if (exists) {
    return array.filter((c) => {
      return c !== item
    })
  }
  return [...array, item]
}

export const mutators = {
  setExposure: (
    [array, value]: [string[], string],
    state: MutableState<FormValues, Partial<FormValues>>,
    utils: Tools<FormValues, Partial<FormValues>>
  ) => {
    utils.changeValue(state, 'exposures', () => addOrRemove(array, value))
  },
  setTypology: (
    args: string,
    state: MutableState<FormValues, Partial<FormValues>>,
    utils: Tools<FormValues, Partial<FormValues>>
  ) => {
    utils.changeValue(state, 'typology', () => args)
  },
}

export const pluralize = (word: string, count: number) =>
  count > 1 ? `${word}s` : word
