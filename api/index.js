import express from "express"
import mongoose from "mongoose"



const app = express()

// MONGODB CONFIG
const connect = async ( ) => {
    try {
        await mongoose.connect('mongodb+srv://manudiiez:manudiiez@cluster0.walamvu.mongodb.net/inet-db?retryWrites=true&w=majority');
        console.log('Connected to mongoDB')
    } catch (error) {
        throw error;
    }
}
mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected!!')
})
mongoose.connection.on('connected', () => {
    console.log('mongoDB connected!!')
})


app.listen(8800, () => {
    connect()
    console.log('Connected to backend!')
})