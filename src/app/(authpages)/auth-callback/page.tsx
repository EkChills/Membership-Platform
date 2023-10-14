"use client";

import { User } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function AuthCallback() {
  const router = useRouter();

  async function updateUser() {
    const decodedURL = window.location.href;
    console.log(decodedURL);

    const queryString = decodedURL.split("?")[1];

    // Decode the query string
    const decodedQueryString = decodeURIComponent(queryString);
    console.log(decodedQueryString);

    const originMatch = /origin=([^&]+)/.exec(
      decodeURIComponent(decodedQueryString)
    );

    const origin = originMatch ? originMatch[1] : null;

    // Parse the query string to get search parameters

    console.log(origin);

    if (origin === "page-description") {
      const res = await axios.get(`/api/auth/register-google/CREATOR`);
      const updatedAccount = await res.data;
      return updatedAccount;
    }
    if (origin === "user-page") {
      const res = await axios.get(`/api/auth/register-google/CONSUMER`);
      const updatedAccount = await res.data;
      return updatedAccount;
    }
    const res = await axios.get(`/api/auth/register-google/ANY`);
    const updatedAccount = await res.data;
    return updatedAccount;
  }
  // if(session) {
  //   if(session.data?.user.Role === 'CONSUMER' && origin === 'user') {
  //     return router.push('/user/dashboard')
  //   }
  //   if(origin === 'creator-page') {

  //   }
  // }

  const { data } = useQuery({
    queryKey: ["google user"],
    queryFn: () => updateUser(),
    onSuccess: (data: { user: User; pushTo: string }) => {
      router.push(`/${data.pushTo}`);
    },
    retry: true,
    retryDelay: 500,
  });
  console.log(data);

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>you will be redirected automatically.</p>
      </div>
    </div>
  );
}
