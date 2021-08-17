import { Transform } from 'stream';
import { stringify } from 'ndjson';

const fullName = new Transform({
  objectMode: true,
  transform({ forename, surname }, encoding, callback) {
    callback(null, { name: forename + ' ' + surname });
  },
});

fullName.pipe(stringify()).pipe(process.stdout);

fullName.write({ forename: 'John', surname: 'Doe' });
fullName.write({ forename: 'Jane', surname: 'Doe' });
