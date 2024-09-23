import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log(`MongoDB Connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1); // process 1 code means exit with failure, 0 means success
    }
}