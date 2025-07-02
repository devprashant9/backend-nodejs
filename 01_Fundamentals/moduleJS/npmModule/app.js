import Add from 'maths';

const res = Add(2, 3);
console.log(res);





/**
 * we need to get something like this
 * 
 * import add from 'maths'; 
 * 
 * it will give error "cannot find package 'maths'
 * 
 * if you try to install any npm package you will have a node_modules folder and inside it will have a folder with the name of the package you installed
 *
 * lets try to simulate that
 * we will create a folder called maths and inside it we will create a file called maths.js and also node_modules folder
 *
 * now it will give error cannot find module 'maths'
 * 
 * so to fix this we will create a package.json file inside the maths folder
 * 
 * but still it will give error cannot find module 'maths'
 * 
 * however if we rename the maths.js file to index.js it will work
 * 
 * however we don't want to rename the file, then we need to add a package.json file inside the maths folder, with type: "module" and main: "maths.js"
 * 
 * in order to provide flexibility we can add different files with extension .mjs, .cjs and then we can use the package.json file to specify which file to use as the main file
 * 
 * we can now add some more configs and can publish this package to npm registry
 * 
 */