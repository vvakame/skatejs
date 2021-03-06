/* eslint-env jasmine, mocha */

import native from '../../../src/util/native';

describe('utils/native', () => {
  it('Should return true for Chrome native MutationObserver', () => {
    expect(native({
      toString: () => 'function MutationObserver() { [native code] }'
    })).to.equal(true);
  });
  it('Should return true for Safari native MutationObserver', () => {
    expect(native({
      toString: () => '[object MutationObserverConstructor]'
    })).to.equal(true);
  });
  it('Should return false for a non native function', () => {
    expect(native(() => null)).to.equal(false);
  });
});
