const projects: {[packageName: string]: string} = {};

for (let i = 1; i <= 100; i++) {
    projects[`lib-${i}`] = `libs/lib-${i}`;
}
console.log(JSON.stringify(projects, null, 4));