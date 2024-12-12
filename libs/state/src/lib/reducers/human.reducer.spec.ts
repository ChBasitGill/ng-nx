import { HumanActions } from '../actions/human.actions'
import { humanReducers, initialState } from './human.reducer'
describe('Human Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = HumanActions.loadHumans

      const result = humanReducers(initialState, action)

      expect(result).toStrictEqual(initialState)
    })
  })
})
