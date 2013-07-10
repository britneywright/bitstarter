var fs = require('fs');

 fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});
