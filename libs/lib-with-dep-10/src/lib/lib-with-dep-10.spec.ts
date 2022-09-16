import { libWithDep10 } from './lib-with-dep-10';

describe('libWithDep10', () => {
  it('should work', () => {
    expect(libWithDep10()).toEqual('lib-with-dep-10');
  });
});
