import { libWithDep5 } from './lib-with-dep-5';

describe('libWithDep5', () => {
  it('should work', () => {
    expect(libWithDep5()).toEqual('lib-with-dep-5');
  });
});
