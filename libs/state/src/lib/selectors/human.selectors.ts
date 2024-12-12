import { createFeatureSelector, createSelector } from '@ngrx/store'
import { humanFeatureKey, HumanState } from '../reducers/human.reducer'

const getHumanFeatureState = createFeatureSelector<HumanState>(humanFeatureKey)

export const humansSelector = createSelector(getHumanFeatureState, (state) => state.humans)
