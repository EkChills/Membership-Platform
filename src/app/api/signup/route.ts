import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/lib/prismaClient";
import bcrypt from 'bcrypt'



export type UserBody = {
  email:string;
  password:string;
  fullName:string;
  userType:"CREATOR" | "CONSUMER"
}

export async function POST(request:NextRequest) {
  try {
    
    const {email, password,fullName, userType}:UserBody = await request.json()
    console.log(email, password, fullName, userType);
    
  
    if(!email ||!password) {
      return new NextResponse('one or more fields are missing', {status:400})
    }

    const exist = await prisma.user.findUnique({
      where:{
        email
      }
    })

    if(exist) {
      return new NextResponse('user currently exists', {status:401})
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    
    const user = await prisma.user.create({
      data:{
        email:email,
        password:hashedPassword,
        name:fullName,
        Role:userType,
        image:`https://robohash.org/${fullName}.png`
      }
    })

    return NextResponse.json(user)
    
  } catch (error) {
    console.log(error);
    
  }
}