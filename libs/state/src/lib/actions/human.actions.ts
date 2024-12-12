import { Human } from '@cbg-models'
import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const HumanActions = createActionGroup({
  source: 'Human',
  events: {
    'Load Humans': emptyProps(),
    'Load Humans Success': props<{ data: Human[] }>(),
    'Load Humans Failure': props<{ error: Error }>()
  }
})
