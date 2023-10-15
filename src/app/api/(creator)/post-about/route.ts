import { db } from "@/lib/prismaClient";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

// /api/post-about
// receives 
// {
//   bio:string;
//   social:[
//     {
//       platform:string;
//       linkUrl:string
//     }
//   ]
// }

interface RequestBody {
  bio:string;
  social:{
    platform:string;
    linkUrl:string
  }[]
}
export async function POST(req:NextRequest) {
  const body:RequestBody = await req.json()
  const session = await getServerSession(authOptions)
  const socials = [...body.social].map((social) => {
    return {
      ...social,
      userId:session!.userId
    }
  })
  try {
    const createdSocial = await db.social.createMany({
      data:socials
    })
    const postedBio = await db.about.create({
      data:{
        bio:body.bio,
        userId:session!.userId
      }
    })
    return NextResponse.json({
      ...createdSocial,
      ...postedBio
    })
  } catch (error) {
    return new NextResponse('Something went wrong', {status:500})
  }
}