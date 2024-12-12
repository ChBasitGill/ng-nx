import { ProductActions } from '../actions/product.actions'
import { productInitialState, productReducers } from './product.reducer'

describe('Product Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = ProductActions.loadProducts

      const result = productReducers(productInitialState, action)

      expect(result).toStrictEqual(productInitialState)
    })
  })
})
