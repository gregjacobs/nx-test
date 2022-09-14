import fse from 'fs-extra';

for (let char = 'a'; char !== 'u'; char = String.fromCharCode(char.charCodeAt(0) + 1)) {
    // Generate file contents
    let fileContents = '';
    for (let i = 0; i < 100000; i++) {
        fileContents += `\
export function doThing${i}() {
    console.log('Hi ${char} ${i}2');
}
`;
    }

    // Output the source file
    fse.outputFileSync(`libs/lib-${char}/src/index.ts`, fileContents);   
}