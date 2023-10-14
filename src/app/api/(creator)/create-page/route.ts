import { db } from "@/lib/prismaClient";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST (req:NextRequest) {
  const {pageName}:{pageName:string} = await req.json()
  const session = await getServerSession(authOptions) 
  try {
    const createdPage = await db.page.create({
      data:{
        pageName:pageName,
        userId:session?.userId as string,
      }
    }) 

    return NextResponse.json(createdPage)
  } catch (error) {
    return NextResponse.json({
      msg:'something went wrong'
    }, {status:500})
  }
}