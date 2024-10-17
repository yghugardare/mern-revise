import express,{Request,Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./utils/db";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}));
app.use(cookieParser());
app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World!")
})

app.listen(PORT,async ()=>{
    console.log("Server is running at ",PORT)
    await connectDB();
})