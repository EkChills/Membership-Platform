import { NextRequest, NextResponse } from "next/server";
import { UserBody } from "../register/route";
import { db as prisma } from "@/lib/prismaClient";
import bcrypt from 'bcrypt'

export async function POST(req:NextRequest) {
  try {
    const body:UserBody = await req.json();
    console.log(body);
    
  
    if(!body.email || !body.password) {
      return new NextResponse(`required field email or password missing in the request body`, {status:422})
    }
  
    const user = await prisma.user.findUnique({
      where: {
        email:body.email
      }
    })

    if(!user) {
      return new NextResponse('user does not exist', {status:404})
    }

    // if(!(await bcrypt.compare(body.password, user.password!))) {
    //   return new NextResponse('incorrect password', {status:401})
    // }
    
    
    return NextResponse.json({...user})
    
  } catch (error) {
    console.log(error);
    return new NextResponse(`${error}`, {status:500})
    
  }
}