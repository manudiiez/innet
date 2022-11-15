import mongoose from "mongoose";
const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    dni: {
        type: Number,
        required: true,
    },
    img: {
      type: String,
    },
    category: {
      type: String,
      default: 'patient',
    },
  },
  { timestamps: true }
);


export default mongoose.model('Person', UserSchema)