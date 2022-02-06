const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const ItemSchema = Schema({
	title: {type: String, required: true},
	description: { type: String, required: true},
})

module.exports = mongoose.model("Item", ItemSchema)