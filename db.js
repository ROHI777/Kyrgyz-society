const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.CONNECTIONsTRING,
    {

        useUnifiedTopology: true,
        useNewUrlParser: true
    }, function () {
        const db = mongoose.connection
        const app = require('./app')
        app.listen(process.env.PORT)
    })
