const fs = require('fs');

// 1. Write a file
fs.writeFileSync('sample.txt', 'Hello, this is a demo file.');

// 2. Read the file
const content = fs.readFileSync('sample.txt', 'utf8');
console.log('File Content:', content);

// 3. Append content to the file
fs.appendFileSync('sample.txt', '\nAppended line.');
console.log('Appended to file.');

// 4. Rename the file
fs.renameSync('sample.txt', 'sample-renamed.txt');
console.log('File renamed.');

// 5. Check if the file exists
if (fs.existsSync('sample-renamed.txt')) {
  console.log('File exists after renaming.');
}

// 6. Get file stats
const stats = fs.statSync('sample-renamed.txt');
console.log('File size:', stats.size, 'bytes');

// 7. Delete the file
fs.unlinkSync('sample-renamed.txt');
console.log('File deleted.');