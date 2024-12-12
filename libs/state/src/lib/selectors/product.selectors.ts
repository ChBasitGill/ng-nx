import { createFeatureSelector, createSelector } from '@ngrx/store'
import { productFeatureKey, ProductState } from '../reducers/product.reducer'

const getFeatureState = createFeatureSelector<ProductState>(productFeatureKey)

export const productsSelector = createSelector(getFeatureState, (state) => state.products)
