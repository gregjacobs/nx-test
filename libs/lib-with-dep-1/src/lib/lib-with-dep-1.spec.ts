import { libWithDep1 } from './lib-with-dep-1';

describe('libWithDep1', () => {
  it('should work', () => {
    expect(libWithDep1()).toEqual('lib-with-dep-1');
  });
});
