const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Hello World</h1>
        <p>This is a sample node.js application.</p>
      </body>
    </html>
  `);
});
app.listen(3000, () => console.log('Server is running on port 3000'));
