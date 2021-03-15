const express = require('express')
const app = express()
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db/mongoose')




require('dotenv').config()


// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());




const port = process.env.PORT || 4000



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
