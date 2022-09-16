import { libWithDep6 } from './lib-with-dep-6';

describe('libWithDep6', () => {
  it('should work', () => {
    expect(libWithDep6()).toEqual('lib-with-dep-6');
  });
});
