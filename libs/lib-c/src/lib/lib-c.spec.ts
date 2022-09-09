import { libC } from './lib-c';

describe('libC', () => {
  it('should work', () => {
    expect(libC()).toEqual('lib-alib-blib-c');
  });
});
