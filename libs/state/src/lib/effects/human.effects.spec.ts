import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HumanEffects } from './human.effects';
import { HumanActions } from '../actions/human.actions'

describe('HumanEffects', () => {
  let actions$: Observable<typeof HumanActions>
  let effects: HumanEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HumanEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HumanEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
