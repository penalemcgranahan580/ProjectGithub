const https = require('https');
const fs = require('fs');

https.get('https://example.com', (res) => {
  const statusCode = res.statusCode;
  console.log(`Status Code: ${statusCode}`);

  if (statusCode === 200) {
    let body = '';
    res.on('data', (chunk) => {
      body += chunk;
    });

    res.on('end', () => {
      console.log(body);
    });
  } else {
    console.error(`Status Code: ${statusCode}`);
  }
});
