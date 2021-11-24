const mongoose = require('mongoose');
//using dotenv to set mongodb url as env variable
require('dotenv').config()


mongoose.connect(process.env.MONGODB_URL)
.then(result => console.log("We are connected to mongoose"))
.catch(err => console.log(err))

