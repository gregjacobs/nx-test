import { doThing0 } from './functions';
export * from '@nx-test/lib-with-dep-1';

console.log('update #1663295353598');
console.log(doThing0);

export function myFn2() {
    console.log('myFn2');
}