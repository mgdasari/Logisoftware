var mongoose = require("mongoose");
const confiq = require("../config/config").get(process.env.NODE_ENV);

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  author: {
    type: String,
    required: true,
    maxlength: 100,
  },
  website: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
