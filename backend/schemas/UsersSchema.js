const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  resetCode: {
    type: String,
  },
  resetCodeExpires: {
    type: Date,
  },
});

// it hashed the password before saving
// UsersSchema.pre("save", async function () {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
// });

module.exports = { UsersSchema };
