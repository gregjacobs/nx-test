import { doThing0 } from './functions';
export * from '@nx-test/lib-with-dep-2';

console.log('update #1663357350976');
console.log(doThing0);

export function myFn3() {
    console.log('myFn3');
}