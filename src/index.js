import dotenv from 'dotenv';
import connectDB from "./db/database.js";
import { App } from './app.js';

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 2700;

connectDB()
.then(() => {
    App.listen(port, () => {
        console.log(`Server is running at port ${port}`)
    })
})
.catch((error) => {
    console.log("MongoDB Connection Failed !", error)
})