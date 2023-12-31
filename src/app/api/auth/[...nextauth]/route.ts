import NextAuth, {AuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient, User } from "@prisma/client"
import { Adapter } from 'next-auth/adapters';
import { baseUrl } from "@/lib/baseUrl";
import { Role } from "@/lib/types/next-auth";


const prisma = new PrismaClient()


export const authOptions:AuthOptions = {
  adapter:PrismaAdapter!(prisma) as Adapter,
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      id:"credentials",
      name:"credentials",
      credentials:{
        email:{label:"Email", type:"text", placeholder:"damned@gmail.com"},
        password:{label:"Password", type:"password"}
      },
      async authorize(credentials){
        console.log(credentials?.email, credentials?.password);
        
        const res = await fetch(`${baseUrl}/api/login`, {
          method:"POST",
          body:JSON.stringify(
            {
              email:credentials?.email,
              password:credentials?.password,
            }
          )
        })

        const user:User = await res.json()

        if(user) {
          return user
        } 

        return null
      }
    })
  ],
  session:{
    strategy:"jwt"
  },
  callbacks: {
    async jwt({ token, account, user, trigger, session }) {
      
      if(trigger === 'update'){
        return {...token, ...session.user}
      }
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = account.userId
      }
      if(user) {        
        return {...token, ...user}
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      
      session.accessToken = token.accessToken as string
      session.userId  = token.id as string
      session.role = token.Role as Role
      session.user.image = token.image as string
      if(token.email) {
        
        session.user.email = token.email as string
      }
      
      return session
    }
  },
  pages:{
    signIn:'/login',
    newUser:'/auth-callback',
  },
}

const handler =  NextAuth(authOptions)

export {handler as GET, handler as POST}

