import { Schema, model, Document } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

const userSchema = new Schema<User>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
});

export type authData = {
  email: string;
  password: string;
};

export default model<User>("User", userSchema);
