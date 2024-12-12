import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { catchError, map, of, switchMap } from 'rxjs'
import { ProductActions } from '../actions/product.actions'

@Injectable()
export class ProductEffects {
  private actions$: Actions = inject(Actions)
  ngrxOnInitEffects(): Action {
    return ProductActions.loadProducts()
  }
  readonly loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() => fetch('https://dummyjson.com/products').then((res) => res.json())),
      map((data) => ProductActions.loadProductsSuccess({ data })),
      catchError((error) => of(ProductActions.loadProductsFailure({ error })))
    )
  })
}
