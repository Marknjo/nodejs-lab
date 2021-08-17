import fs from 'fs';
import stream from 'stream';
import util from 'util';

const pipeline = util.promisify(stream.pipeline);

const uppercase = new stream.Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

async function run() {
  try {
    await pipeline(
      fs.createReadStream('./file.txt', 'utf8'),
      uppercase,
      fs.createWriteStream('./newFile.txt', 'utf8')
    );

    console.log('Pipeline succeeded');
  } catch (error) {
    console.error('Pipeline failed with the following error: ', error.message);
  }
}

run();
