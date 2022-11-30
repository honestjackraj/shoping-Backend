const mongoose = require("mongoose")


const user = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})


module.exports = mongoose.model("registers", user);
