import { doThing0 } from './functions';
export * from '@nx-test/lib-with-dep-1';

console.log('update #1663356489002');
console.log(doThing0);

export function myFn2() {
    console.log('myFn2');
}