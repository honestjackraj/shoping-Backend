const mongoose = require("mongoose")


const Category = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    // description: { type: String, required: true },
})


module.exports = mongoose.model("Category", Category);