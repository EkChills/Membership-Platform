"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import {SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpType } from "@/lib/zod/formTypes";
import axios from 'axios'
import { Loader2 } from "lucide-react";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";


type SignUpInputProps = {
  SignUpFor:'CREATOR' | 'CONSUMER',
  pushTo:string;
}

export default function SignUpInputs({SignUpFor, pushTo}:SignUpInputProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {formState:{errors}, register, handleSubmit} = useForm<SignUpType>({resolver:zodResolver(SignUpSchema)})
  const router = useRouter()

  const handleSubmitHandler:SubmitHandler<SignUpType> = async(data) => {
    const {email, name, password} = data
    try {
      setIsLoading(true)
      const res = await axios.post('/api/signup', {
        email,
        fullName:name,
        password,
        userType:SignUpFor
      })
      const data = await res.data
      toast({
        title:"Success! you've been registered as a creator on Dasha."
      })
      router.push(pushTo)
      
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit(handleSubmitHandler)}>
      <Input
        placeholder="Name"
        className={buttonVariants({ variant: "outline" })}
        {...register("name", {required:true})}
      />
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
      <Button>{isLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : "Sign up"}</Button>
    </form>
  );
}
