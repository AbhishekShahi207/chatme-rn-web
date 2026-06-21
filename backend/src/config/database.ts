import mongoose from "mongoose";


export const connectDB=async()=>{
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("Mongodb connectes successfully")
    } catch (error:any) {
         console.error("Name:", error?.name);
  console.error("Message:", error?.message);
  console.error("Full Error:", error);
        process.exit(1)
    }
}