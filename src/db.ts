import mongoose from "mongoose";

export const dbConnect = async ()=>{
    try{
        const db =  await mongoose.connect("mongodb://127.0.0.1/trpcdb")
        console.log("databse is connected to : ", db.connection.name)
    }catch (error) {
        if (error instanceof Error){
            console.error(error.message)
        }
    }
}








