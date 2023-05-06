const mongoose = require('mongoose')
const {MONGO_URI}= require('../../config/config')
async function connectDBS() {
    try {
        await mongoose.connect(MONGO_URI)
     console.log(MONGO_URI);
    } catch (error) {
        console.log("DBS not connected. There was an error:" + error);
    }
    
}

module.exports = connectDBS;