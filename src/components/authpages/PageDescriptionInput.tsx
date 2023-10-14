"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { Loader2 } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function PageDescriptionInput() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<{ pageName: string }>({
    resolver: zodResolver(z.object({ pageName: z.string().min(2, {message:'the page name must be a minimum of two characters'}) })),
  });
  const router = useRouter()
  const {data:session} = useSession()

  const submitHandler:SubmitHandler<{pageName:string}> = async(data) => {
    try {
      setIsLoading(true)
      const res = await axios.post('/api/create-page', {pageName:data.pageName})
      const createdPage = await res.data
      router.push(`/creatorspage/${session?.userId}`)
      toast({title:'Welcome onboard'})
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false)
    }

  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="my-6 flex flex-col items-start">
        <label htmlFor="page-name" className="font-bold text-sm">
          Page name *
        </label>
        <Input
          placeholder="pageName"
          id="page-name"
          className={buttonVariants({ variant: "outline" })}
          {...register("pageName", { required: true })}
        />
      </div>
      <Button className="w-full">
        {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Continue"}
      </Button>
    </form>
  );
}
