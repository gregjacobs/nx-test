import dedent from 'dedent';
import fse from 'fs-extra';

for (let i = 1; i <= 100; i++) {
    // Generate file contents
    let fileContents = '';
    for (let j = 0; j < 100000; j++) {
        fileContents += dedent`
            export function doThing${j}() {
                console.log('Hi ${i} ${j}5');
            }
        ` + '\n';
    }

    // Output the source file
    fse.outputFileSync(`libs/lib-${i}/src/index.ts`, fileContents);

    // Output project.json with faster building run-commands:
    fse.outputFileSync(`libs/lib-${i}/project.json`, dedent`
        {
            "$schema": "../../node_modules/nx/schemas/project-schema.json",
            "sourceRoot": "libs/lib-${i}/src",
            "projectType": "library",
            "targets": {
                // "build": {
                //     "executor": "nx:run-commands",
                //     "options": {
                //         "command": "tsc -p tsconfig.lib.json",
                //         "cwd": "libs/lib-${i}"
                //     }
                // },
                "build": {
                  "executor": "@nrwl/js:tsc",
                  "outputs": ["{options.outputPath}"],
                  "options": {
                    "outputPath": "dist/libs/lib-${i}",
                    "main": "libs/lib-${i}/src/index.ts",
                    "tsConfig": "libs/lib-${i}/tsconfig.lib.json",
                    "assets": ["libs/lib-${i}/*.md"]
                  }
                },
                "lint": {
                    "executor": "@nrwl/linter:eslint",
                    "outputs": ["{options.outputFile}"],
                    "options": {
                        "lintFilePatterns": ["libs/lib-${i}/**/*.ts"]
                    }
                },
                "test": {
                    "executor": "@nrwl/jest:jest",
                    "outputs": ["coverage/libs/lib-${i}"],
                    "options": {
                    "jestConfig": "libs/lib-${i}/jest.config.ts",
                        "passWithNoTests": true
                    }
                }
            },
            "tags": []
        }      
    `);
}