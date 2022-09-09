import { libA } from '@nx-test/lib-a';
import { libB } from '@nx-test/lib-b';

export function libC(): string {
  return libA() + libB() + 'lib-c';
}
