import { doThing0 } from './functions';
export * from '@nx-test/lib-with-dep-4';

console.log('Update to lib-with-dep-5!');
console.log('update #1663279434371');
console.log(doThing0);

export function myFn5() {
    console.log('myFn5');
}