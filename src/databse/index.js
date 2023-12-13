import mongoose from 'mongoose'

 export async function connectDB() {
  try {
     await  mongoose.connect("mongodb+srv://admin:admin@cluster0.o22v3bq.mongodb.net/");
  console.log("DB connection established Sucessfully !!");
  } catch (error) {
    console.log(error);
  }
}