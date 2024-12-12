import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects'
import { HumanActions } from '../actions/human.actions'
import { catchError, map, of, switchMap } from 'rxjs'
import { Human } from '@cbg-models'
import { Action } from '@ngrx/store'

const humanData: Human[] = [
  {
    name: 'basit',
    age: 29,
    isAlive: true,
    gender: 'male'
  },
  {
    name: 'jamil',
    age: 69,
    isAlive: true,
    gender: 'male'
  }
]

@Injectable()
export class HumanEffects implements OnInitEffects {
  private actions$: Actions = inject(Actions)
  ngrxOnInitEffects(): Action {
    return HumanActions.loadHumans()
  }
  readonly loadHumans$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HumanActions.loadHumans),
      switchMap(() => of(humanData)),
      map((data) => HumanActions.loadHumansSuccess({ data })),
      catchError((error) => of(HumanActions.loadHumansFailure({ error })))
    )
  })
}
