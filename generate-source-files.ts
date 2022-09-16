import dedent from 'dedent';
import fse from 'fs-extra';

// Generate 5 packages that rely on each other
for (let i = 1; i <= 10; i++) {
    // Generate file contents
    let fileContents = ``;
    for (let j = 0; j < 100000; j++) {
        fileContents += dedent`
            export function doThing${j}() {
                console.log('Hi ${i} ${j}');
            }
        ` + '\n';
    }

    // Output the source file
    fse.outputFileSync(`libs/lib-with-dep-${i}/src/functions.ts`, fileContents);

    // Output a source file with a change
    fse.outputFileSync(`libs/lib-with-dep-${i}/src/index.ts`, dedent`
        import { doThing0 } from './functions';
        ${i === 1 
            ? '' 
            : `export * from '@nx-test/lib-with-dep-${i - 1}';`
        }

        console.log('update #${Date.now()}');
        console.log(doThing0);

        export function myFn${i}() {
            console.log('myFn${i}');
        }
    `);

    generateSupportFiles(`lib-with-dep-${i}`);
}

// Generate 100 parallel packages
// for (let i = 1; i <= 100; i++) {
//     // Generate file contents
//     let fileContents = ``;
//     for (let j = 0; j < 100000; j++) {
//         fileContents += dedent`
//             export function doThing${j}() {
//                 console.log('Hi ${i} ${j}');
//             }
//         ` + '\n';
//     }

//     // Output the source file
//     fse.outputFileSync(`libs/lib-${i}/src/functions.ts`, fileContents);

//     // Output a source file with a change
//     fse.outputFileSync(`libs/lib-${i}/src/index.ts`, dedent`
//         export * from './functions';

//         console.log('update #${Date.now()}');
//     `);

//     generateSupportFiles(`lib-${i}`);
// }

function generateSupportFiles(libName: string) {
    // Output project.json with faster building run-commands:
    fse.outputFileSync(`libs/${libName}/project.json`, dedent`
        {
            "$schema": "../../node_modules/nx/schemas/project-schema.json",
            "sourceRoot": "libs/${libName}/src",
            "projectType": "library",
            "targets": {
                // "build": {
                //     "executor": "nx:run-commands",
                //     "options": {
                //         "command": "tsc -p tsconfig.lib.json",
                //         "cwd": "libs/${libName}"
                //     }
                // },
                "build": {
                  "executor": "@nrwl/js:tsc",
                  "outputs": ["{options.outputPath}"],
                  "options": {
                    "outputPath": "dist/libs/${libName}",
                    "main": "libs/${libName}/src/index.ts",
                    "tsConfig": "libs/${libName}/tsconfig.lib.json",
                    "assets": ["libs/${libName}/*.md"]
                  }
                },
                "lint": {
                    "executor": "@nrwl/linter:eslint",
                    "outputs": ["{options.outputFile}"],
                    "options": {
                        "lintFilePatterns": ["libs/${libName}/**/*.ts"]
                    }
                },
                "test": {
                    "executor": "@nrwl/jest:jest",
                    "outputs": ["coverage/libs/${libName}"],
                    "options": {
                    "jestConfig": "libs/${libName}/jest.config.ts",
                        "passWithNoTests": true
                    }
                }
            },
            "tags": []
        }      
    `);

}