import { createReducer, on } from '@ngrx/store'
import { Human } from '@cbg-models'
import { DataState, createCompleteState, createErrorState, createLoadingState } from '@cbg-utility'
import { HumanActions } from '../actions/human.actions'

export const humanFeatureKey = 'humans'

export interface HumanState {
  humans: DataState<Human[]>
}

export const initialState: HumanState = { humans: createLoadingState<Human[]>() }

export const humanReducers = createReducer(
  initialState,

  on(HumanActions.loadHumans, (state): HumanState => {
    return {
      ...state,
      humans: createLoadingState()
    }
  }),
  on(HumanActions.loadHumansSuccess, (state, { data }): HumanState => {
    return {
      ...state,
      humans: createCompleteState(data)
    }
  }),
  on(HumanActions.loadHumansFailure, (state, { error }): HumanState => {
    return {
      ...state,
      humans: createErrorState(error)
    }
  })
)
