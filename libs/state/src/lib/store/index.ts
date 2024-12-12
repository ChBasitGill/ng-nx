import { ActionReducerMap } from '@ngrx/store'
import { humanReducers, HumanState } from '../reducers/human.reducer'

export interface RootState {
  humans: HumanState
}

export const reducers: ActionReducerMap<RootState> = {
  humans: humanReducers
}
