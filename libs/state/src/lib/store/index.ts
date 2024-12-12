import { ActionReducerMap } from '@ngrx/store'
import { humanReducers, HumanState } from '../reducers/human.reducer'
import { productReducers, ProductState } from '../reducers/product.reducer'

export interface RootState {
  humans: HumanState
  products: ProductState
}

export const reducers: ActionReducerMap<RootState> = {
  humans: humanReducers,
  products: productReducers
}
