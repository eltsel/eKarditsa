const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({
    name:{},
    address:{},
    location:{},
    phone:{},
    email:{},
    site:{},
    activity:{},
    description:{},
    picture:{},
    logo:{}
}, {strict: false,timestamps: true})



module.exports = storeSchema;