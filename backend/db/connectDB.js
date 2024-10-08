import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${con.connection.host}`)
    } catch (error) {
        console.log(`MongoDB Connection Error: ${error}`)
    }
}