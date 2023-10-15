"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import {SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "@/lib/zod/formTypes";
import axios from 'axios'
import { Loader2 } from "lucide-react";
import { toast } from "../ui/use-toast";
import { usePathname, useRouter } from "next/navigation";
import {signIn, useSession} from 'next-auth/react'


type LoginInputProps = {
  LoginFor:'CREATOR' | 'CONSUMER',
  pushTo:string;
}

export default function LoginInputs({LoginFor, pushTo}:LoginInputProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {formState:{errors}, register, handleSubmit} = useForm<LoginType>({resolver:zodResolver(LoginSchema)})
  const router = useRouter()
  const {data:session} = useSession()
  const pathname = usePathname()
  

  const handleSubmitHandler:SubmitHandler<LoginType> = async(data) => {
    const {email, password} = data
    try {
      setIsLoading(true)
      const signInCallback = await signIn('credentials', {redirect:false, email, password})
      if(signInCallback?.ok) {
        toast({
          title:`welcome aboard ${session?.user.name}`
        })
        return router.push('/auth-callback?origin=user')
      } 
      if(signInCallback?.error) {
        toast({
          variant:"destructive",
          title:signInCallback?.error
        })
      }
    } catch(err) {
      toast({
        variant:"destructive",
        title:"something went wrong"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit(handleSubmitHandler)}>
      <Input
        placeholder="Email"
        className={buttonVariants({ variant: "outline" })}
        {...register("email", {required:true})}
      />
      <div>
        <Input
          placeholder="Password"
          className={buttonVariants({ variant: "outline" })}
          {...register("password", {required:true})}
        />
      </div>
      <Button>{isLoading ? <Loader2 className="w-6 h-6 animate-spin"/> : "Login"}</Button>
    </form>
  );
}
