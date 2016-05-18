import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TwayAppComponent } from '../app/tway.component';

beforeEachProviders(() => [TwayAppComponent]);

describe('App: Tway', () => {
  it('should create the app',
      inject([TwayAppComponent], (app: TwayAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tway works!\'',
      inject([TwayAppComponent], (app: TwayAppComponent) => {
    expect(app.title).toEqual('tway works!');
  }));
});
