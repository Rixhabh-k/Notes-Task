const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log("Connected to DB");
    })
}

module.exports = connectToDb