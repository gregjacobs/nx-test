import { libWithDep7 } from './lib-with-dep-7';

describe('libWithDep7', () => {
  it('should work', () => {
    expect(libWithDep7()).toEqual('lib-with-dep-7');
  });
});
