import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularTwoAppComponent } from '../app/angular-two.component';

beforeEachProviders(() => [AngularTwoAppComponent]);

describe('App: AngularTwo', () => {
  it('should create the app',
      inject([AngularTwoAppComponent], (app: AngularTwoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-two works!\'',
      inject([AngularTwoAppComponent], (app: AngularTwoAppComponent) => {
    expect(app.title).toEqual('angular-two works!');
  }));

  it('should set edmund',
      inject([AngularTwoAppComponent], (app: AngularTwoAppComponent) => {
    expect(app.edmund).toEqual('cool');
  }));
});
