import { User } from "@prisma/client";
import NextAuth from "next-auth/next";

enum Role {
  Consumer,
  Creator,
}

declare module "next-auth" {
  interface Session {
    accessToken:string;
    userId:string;
    user:User
    role:Role
  }
}