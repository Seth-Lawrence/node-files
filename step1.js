"use strict";

const fsP = require('fs/promises');
const argv = process.argv;


async function cat(path) {

  try {
    const content = await fsP.readFile(path, 'utf8');
    console.log("file contents", content);
  } catch (err) {
    // console.log("error object",err);
    process.exit(1);
  }
}

// console.log(argv);

cat(argv[2])


