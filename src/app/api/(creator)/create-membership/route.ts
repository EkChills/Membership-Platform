import { db } from "@/lib/prismaClient";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req:NextRequest) {
  console.log('triggered');
  
  const session = await getServerSession(authOptions)
  if(!session) {
    return NextResponse.json({
      msg:"unauthorized",
    }, {status:401})
  }
  try {
    const body:{
      description:string;
      price:number;
      name:string;
      uploadedImage:string;
    } = await req.json()
    console.log(body);
    
    const updatedMembership = await db.membership.create({
      data:{
        description:body.description,
        price:Number(body.price),
        name:body.name,
        userId:session.userId,
        coverImageUrl:body.uploadedImage
      }
    })
    return NextResponse.json(updatedMembership)
  } catch (error) {
    return new NextResponse('something went wrong', {status:500})
  }
}