import { createFeatureSelector, createSelector } from '@ngrx/store'
import { HumanState } from '../reducers/human.reducer'

const getHumanFeatureState = createFeatureSelector<HumanState>('humans')

export const humansSelector = createSelector(getHumanFeatureState, (state) => state.humans)
