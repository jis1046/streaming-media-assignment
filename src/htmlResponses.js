const fs = require('fs'); // pull in the file system module

const getIndex = (request, response, page) => {
  const index = fs.readFileSync(`${__dirname}${page}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;
