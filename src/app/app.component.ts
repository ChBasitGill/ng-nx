import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { humansSelector } from '@cbg-state'
import { JsonPipe } from '@angular/common'

@Component({
  imports: [RouterModule, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cbg'
  readonly store: Store = inject(Store)
  humans = this.store.selectSignal(humansSelector)
}
