const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://arvy:x7zplh9m@cluster0.unyc6.mongodb.net/simple-mern-app?retryWrites=true&w=majority")
.then(result => console.log("We are connected to mongoose"))
.catch(err => console.log(err))

