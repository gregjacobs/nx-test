import { libWithDep9 } from './lib-with-dep-9';

describe('libWithDep9', () => {
  it('should work', () => {
    expect(libWithDep9()).toEqual('lib-with-dep-9');
  });
});
