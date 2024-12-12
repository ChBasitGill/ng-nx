import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { productsSelector, TodoStore } from '@cbg-state'
import { NxWelcomeComponent } from './nx-welcome.component'
import { JsonPipe } from '@angular/common'

@Component({
  imports: [RouterModule, NxWelcomeComponent, JsonPipe],
  providers: [TodoStore],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cbg'
  readonly store: Store = inject(Store)
  readonly todoStore = inject(TodoStore)

  humans = this.store.selectSignal(productsSelector)
}
