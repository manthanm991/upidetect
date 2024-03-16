const connectToMongo = require('./db');
var cors = require('cors') 
connectToMongo();


const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());
app.use('/api/formdata', require('./routes/formdata'))

app.listen(port, () => {
  console.log(`Upidetect backend listening on port http://localhost:${port}`)
})