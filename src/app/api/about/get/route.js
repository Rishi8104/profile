import { connectDB } from "@/databse";
import About from "@/models/about";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await connectDB();
  
    const savedataDB = await  About.find({});

    if (savedataDB) {
      return NextResponse.json({
        success: true,
        message:"Data get Successfully"
      })
    }else{
      return NextResponse.json({
        success: false,
        message:"Data get not Successfully"
      })
    }

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message:"Something went wrong ! plase try again"
    })
  }
}