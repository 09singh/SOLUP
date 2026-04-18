import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    passwoard: String
});

const User = mongoose.model("User", userSchema);
export default User;