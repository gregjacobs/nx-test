import { doThing0 } from './functions';
export * from '@nx-test/lib-with-dep-3';

console.log('update #1663298236128');
console.log(doThing0);

export function myFn4() {
    console.log('myFn4');
}