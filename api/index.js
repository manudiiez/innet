import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import cors from 'cors'
import personRoute from './routes/person.js'


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

// SERVER
const app = express()
dotenv.config()


// MIDDLEWARES 
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/person', personRoute);


app.listen(8800, () => {
    connect()
    console.log('Connected to backend!')
})