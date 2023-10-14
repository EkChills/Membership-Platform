import { db } from "@/lib/prismaClient";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../[...nextauth]/route";
import { redirect } from "next/navigation";
import { Session } from "inspector";

type RequestBodyType = {
  email: string;
}
export async function GET (req:NextRequest, {params}:{params:{email:string}}) {
  console.log('triggered');
  
  try {
    const session = await getServerSession(authOptions)
    console.log(session);
    

    if(session) {
      if(params.email === 'CREATOR') {
        const foundUser = await db.user.findFirst({
          where:{
            email:session.user.email
          }
        })
        if(!foundUser) {
          return await db.user.create({
            data:{
              email:session.user.email,
              Role:"CREATOR"
            }
          })
        }
      const updatedGoogleUser = await db.user.update({
        where:{
          email:session.user.email as string,
        },
        data:{
          Role:"CREATOR"
        }
      })
      
      return NextResponse.json({
        success:true,
        user:updatedGoogleUser,
        pushTo:'page-description'
      })
    }
  
    if(params.email === 'CONSUMER') {
      return NextResponse.json({
        success:true,
        pushTo:'user-page'
      })
    }
    if(params.email === 'LOGIN') {
      const user = await db.user.findFirst({
        where:{
          email:session.user.email
        }
      })
      return NextResponse.json({
        success:true,
        user,
        pushTo:user?.Role === 'CONSUMER' ? 'user-page' : 'page-description'
      })
    }
    const user = await db.user.findFirst({
      where:{
        email:session.user.email
      }
    })
    return NextResponse.json({
      success:true,
      user,
      pushTo:user?.Role === 'CONSUMER' ? 'user-page' : 'page-description'
    })

  }

  } catch (error) {
    return new NextResponse('server error', {status:500})
  }
}