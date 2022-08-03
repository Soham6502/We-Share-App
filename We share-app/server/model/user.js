import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// we also need to define here that for which collections we are happy to apply this particuler schema

const user = mongoose.model("user", userSchema);

export default user;
