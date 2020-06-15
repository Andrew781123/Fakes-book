const mongoose = require("mongoose");
const userBasicSchema = require("./userBasic");
const likeSchema = require("./like");
const moment = require("moment");

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  createdAt: {
    type: String,
    default: () => {
      return moment(Date.now()).format("DD MMM");
    }
  },

  likes: [likeSchema]
});

commentSchema.virtual("likeCount").get(function () {
  return this.likes.length;
});

module.exports = commentSchema;
