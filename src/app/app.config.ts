import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app.routes'
import { provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { HumanEffects, reducers } from '@cbg-state'

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers),
    provideEffects([HumanEffects]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes)
  ]
}
