const express = require('express');
const app = express();

// Serving the  static files from the "public" directory
app.use(express.static('public'));

//  The server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
