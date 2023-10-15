import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/prismaClient";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// /api/get-about/userId

export async function GET(req:NextRequest, {params}:{params:{userId:string}}) {
  try {
    const session = await getServerSession(authOptions)
    const userBio = await db.about.findFirst({
      where:{
        userId:session?.userId
      }
    })
    
    const userLinks = await db.social.findMany({
      where:{
        userId:session?.userId
      }
    })

    return NextResponse.json({
      bio:userBio?.bio || "",
      socials:[...userLinks]
    })
  } catch (error) {
    return new NextResponse('Something went wrong', {status:500})
  }
}