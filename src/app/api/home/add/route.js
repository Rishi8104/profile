
import { connectDB } from "@/databse";
import Home from "@/models/home";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    await connectDB();
  const extreactdata =  request.json();
  const savedata = Home.create(extreactdata);

    if (savedata) {
      return NextResponse.json({
        success: true,
        message:"Data saved successfully"
      })
    }else{
      return NextResponse.json({
        success: false,
        message:"Somthing went worng"
      })
    }
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({
      success: false,
      message:"Somthing went worng"
    })
  }
}