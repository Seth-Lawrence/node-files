"use strict";

const fsP = require('fs/promises');
const { url } = require('inspector');
const argv = process.argv;

/**reads the file with a path,
 * and print the contents of that file.
 */
async function cat(path) {

  try {
    const content = await fsP.readFile(path, 'utf8');
    console.log("file contents", content);
  } catch (err) {
    console.log("error object",err);
    process.exit(1);
  }
}

// console.log(argv);


async function webCat(url) {

  resp = await fetch(url);
  content = await resp.text();

  console.log(resp);

}

function controller(pathOrFile) {
  try  {
    new URL(argv[2])
  } catch (TypeError) {


  }

}


if (argv[2] instanceof URL) {
  webCat(argv[2]);
} else {
  cat(argv[2]);
}

// cat(argv[2])


