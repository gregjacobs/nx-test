import { libWithDep4 } from './lib-with-dep-4';

describe('libWithDep4', () => {
  it('should work', () => {
    expect(libWithDep4()).toEqual('lib-with-dep-4');
  });
});
