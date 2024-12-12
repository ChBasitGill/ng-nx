import { createReducer, on } from '@ngrx/store'
import { ProductActions } from '../actions/product.actions'
import { createCompleteState, createErrorState, createLoadingState, DataState } from '@cbg-utility'
import { Product } from '@cbg-models'

export const productFeatureKey = 'products'

export interface ProductState {
  products: DataState<Product[]>
}

export const productInitialState: ProductState = {
  products: createLoadingState<Product[]>()
}

export const productReducers = createReducer(
  productInitialState,

  on(ProductActions.loadProducts, (state): ProductState => {
    return {
      ...state,
      products: createLoadingState()
    }
  }),
  on(ProductActions.loadProductsSuccess, (state, { data }): ProductState => {
    return {
      ...state,
      products: createCompleteState(data)
    }
  }),
  on(ProductActions.loadProductsFailure, (state, { error }): ProductState => {
    return {
      ...state,
      products: createErrorState(error)
    }
  })
)
