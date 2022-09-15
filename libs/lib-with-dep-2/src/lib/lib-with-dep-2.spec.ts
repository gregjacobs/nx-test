import { libWithDep2 } from './lib-with-dep-2';

describe('libWithDep2', () => {
  it('should work', () => {
    expect(libWithDep2()).toEqual('lib-with-dep-2');
  });
});
