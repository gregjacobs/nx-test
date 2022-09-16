import { libWithDep8 } from './lib-with-dep-8';

describe('libWithDep8', () => {
  it('should work', () => {
    expect(libWithDep8()).toEqual('lib-with-dep-8');
  });
});
