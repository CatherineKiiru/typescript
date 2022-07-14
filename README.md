# TypeScript Basics
- Typescript is an open-source language and a superset of JavaScript.
- Developers use TypeScript to add static types to their code.
- All Typescript files get compiled down to regular JavaScript, hence why it's optional to use TyeScript.
- TyeScript can be used as frontend JS and backend with Node.js

## Static Types in TyeScript
Static typing means that you explicity assign types to variables unlike in dynamically types languages.

- Static languages - Java, C, C++, Rust, Go
- Dynamic Languages - JavaScript, Python, PHP, Ruby

 - Dynamically typed languages only associate types to variables at run-time and not named in your code during build time. For example, when you create a JavaScript variable called day and assign it a string value of "Monday", JavaScript will not identify the variable as a string or number. But static languages like TypeScript, you expicitly assign types to variables, return values, function parameters, etc.

 ## TypeScript File System
- You can use .ts or .tsx extensions (tsx for React components)
- TSC is the complier used to compile .ts files to JavaScript
- The tsconfig.json file (similar to package.json) configures how TypeScript works

## Installing TypeScript Compiler
- sudo npm i -g typescript - to install globally so it's accessible across your system
- TSC -V - to check if it's installed and the version installed

## Compiling TypeScript to javaScript
- You can compile TS to JS by running tsc 'file name' on your terminal. This feature also reveals errors in your code.
- To automate your compilations and error checks, use 
tsc --watch 'filename'.
- Watch mode also compiles changes to files automatically.
- To stop watch mode, use ctrl + c

## Setting up the Configuration file
Use tsc --init to create a tsconfig.json file

### OutDir and RootDir 
- Tyically, you don't have JS and TS files next to each other in the root directory. The common case when not using any framework is that you'll have a source folder that has your typescript files (the files you're working on) and a dist folder with your project files (the actual JavaScript files).

- In the tsconfig.json file, uncomment the "outDir" and add "./dist", this is where our compliled JavaScript files (production code) will go. 
- Next, uncomment "rootDir" and add "./src". This will contain our TypeScript source code.
- Proceed to create both "dist" and "src" folders, then move the TS file into src.
- type "tsc" to create an index.js file in the dist folder
- Add an index.html with the srcipt tag. Then right-click and open with live server to view the web page on the browser.
- Open up your console and you'll see the "id:5"

References:
https://www.youtube.com/watch?v=BCg4U1FzODs
Start at 26:00 - type assertion