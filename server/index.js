const express = require('express');
require('./db/mongoose')

const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json())


//appending API to our router.
app.use('/api', require('./routes/api'));



//listen takes in two arguments, a PORT and a cb function.
app.listen(PORT, () => {
    console.log("App is listening on port " + PORT)
})
