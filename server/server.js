const express = require('express')
const app = express()
const cors = require('cors');
const morgan = require("morgan");
const port = 3500
const router=require("./Router/router")
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

app.use('/api',router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})