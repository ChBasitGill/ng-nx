import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'
import { RouterModule } from '@angular/router'
import { reducers, HumanEffects } from '@cbg-state'
import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterModule.forRoot([])],
      providers: [provideStore(reducers), provideEffects([HumanEffects])]
    }).compileComponents()
  })
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome cbg')
  })

  it(`should have as title 'cbg'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('cbg')
  })
})
