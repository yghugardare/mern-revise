import "dotenv/config"
import mongoose from "mongoose";



export const connectDB = async () =>{
    try {
        const mongoUri = process.env.MONGO_DB_URI as string;
        await mongoose.connect(mongoUri);
        console.log("Mongo db connected successfully!");
    } catch (error) {
        console.error("Error connecting to DB");
        process.exit(1);
    }
}
