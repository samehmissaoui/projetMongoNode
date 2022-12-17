//Importing mongoose
const mongoose = require('mongoose')

//Database connection method
const connectBD = (url) => {
    return mongoose.connect(url)
}

//Exporting the method
module.exports = connectBD






