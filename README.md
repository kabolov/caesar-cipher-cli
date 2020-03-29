# Caesar cipher CLI tool

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## This CLI tool has 4 arguments

- --action (alias -a): String **REQUIRED**, encode or decode action
- --shift (alias -s): Number **REQUIRED**, shift for encrypting/decrypting
- --input (alias -i): String, path to input file
- --output (alias -o): String, path to output file

## Running application

```
$ cd task1
$ node index.js -a encode -s 5 -i './path/to/input/file' -o './path/to/output/file' //encode
$ node index.js -a decode -s 5 -i './path/to/input/file' -o './path/to/output/file' //decode
```

1. **IF** input argument is missing - use your console to input text

   - Example:

   ```
   $ node index.js -a encode -s 3 -o './path/to/output/file' // text will be written to provided file
   $ node index.js -a encode -s 3  // text will be written to console
   ```

2. **IF** output argument is missing - encoded/decoded text will be written to console

   - Example:

   ```
   $ node index.js -a encode -s 3 -i './path/to/input/file' // text will be written to console
   $ node index.js -a encode -s 3  // text will be written to console
   ```
