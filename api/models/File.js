import mongoose from "mongoose";
const FileSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        pressure: {
            type: String,
            required: true,
        },
        diseases: {
            type: String,
            default: 'ninguna',
        },
        observations: {
            type: Text
        },

    },
    { timestamps: true }
);


export default mongoose.model('File', FileSchema)