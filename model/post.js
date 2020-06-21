const mongoose = require("mongoose");
const { commentSchema } = require("./comment");
const moment = require("moment");
const { userSchema } = require("./userDetail");

const postSchema = new mongoose.Schema(
  {
    user: userSchema,

    content: {
      type: String,
      required: true
    },

    isPublic: {
      type: Boolean,
      required: true
    },

    createdAt: {
      type: Date,
      default: () => {
        return Date.now();
      }
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userDetail"
      }
    ],

    comments: [commentSchema]
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// postSchema.virtual("likeCount").get(function () {
//   return this.likes.length;
// });

// postSchema.virtual("commentCount").get(function () {
//   return this.comments.length;
// });

postSchema.virtual("formattedCreatedAt").get(function () {
  return moment(this.createdAt).format("DD MMM, H:mm");
});

module.exports = mongoose.model("post", postSchema);
