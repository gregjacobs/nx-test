import { libWithDep3 } from './lib-with-dep-3';

describe('libWithDep3', () => {
  it('should work', () => {
    expect(libWithDep3()).toEqual('lib-with-dep-3');
  });
});
