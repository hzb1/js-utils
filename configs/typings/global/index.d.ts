/* eslint-disable import/no-extraneous-dependencies */
import * as Chai from 'chai';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    expect: Chai.ExpectStatic
  }
  // eslint-disable-next-line vars-on-top, no-var, no-unused-vars
  var expect: Chai.ExpectStatic;
}
