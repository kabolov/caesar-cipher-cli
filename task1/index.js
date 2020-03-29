const fs = require('fs');
const { program } = require('commander');
const { pipeline } = require('stream');

const { parseInt, validation, errorHandler } = require('./helpers');
const CaesarTransform = require('./helpers/transform');

process.stdin.setEncoding('utf8');

program
  .option('-a, --action <type>', 'action type')
  .option('-s, --shift <number>', 'shift', parseInt)
  .option('-i, --input <value>', 'input file')
  .option('-o, --output <value>', 'output file');

program.parse(process.argv);

const { shift, input, output, action } = program;
validation(action, shift);
const Transform = new CaesarTransform(shift, action);

if (input) {
  if (output) {
    pipeline(
      fs.createReadStream(input),
      Transform,
      fs.createWriteStream(output, { flags: 'a' }),
      err => {
        if (err) {
          if (err.code === 'ENOENT') errorHandler(input);
          else console.error('Something got wrong.', err);
        } else {
          process.stdout.write(
            `Your encoded file here ${__dirname}/${output}\n`
          );
        }
      }
    );
  } else {
    pipeline(
      fs.createReadStream(input),
      Transform,
      process.stdout,

      err => {
        if (err) errorHandler(input);
      }
    );
  }
} else if (output) {
  pipeline(
    process.stdin,
    Transform,
    fs.createWriteStream(output, { flags: 'a' }),
    err => {
      if (err) {
        console.error('Something got wrong.', err);
      } else {
        process.stdout.write(`Your encoded file here ${__dirname}/${output}\n`);
      }
    }
  );
} else {
  pipeline(process.stdin, Transform, process.stdout, err => {
    console.log(err);
  });
}
