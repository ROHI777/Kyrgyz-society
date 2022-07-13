const mongoose=require('mongoose')

// /create a schema/
let subscribersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    
    
})


const subscribers = mongoose.model('subscribers', subscribersSchema);
  subscribers.createCollection()
module.exports =subscribers