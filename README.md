# A sample chrome extension using Manifest V3 that modify request headers using declarativeNetRequest API

Docs: https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/

Sample server in node.js express-

```
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Sample Fetch call to test-

```
fetch('http://localhost:4000', {
  headers: {
    'h1': 'v1',
    'h2': 'v2'
  }
})
```