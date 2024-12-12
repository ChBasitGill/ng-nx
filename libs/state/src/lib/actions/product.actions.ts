import { Product } from '@cbg-models'
import { createActionGroup, emptyProps, props } from '@ngrx/store'

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: Product[] }>(),
    'Load Products Failure': props<{ error: Error }>()
  }
})
