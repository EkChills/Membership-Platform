import React from "react";
import { RegisterLink, LoginLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function page() {
  const {getUser} = getKindeServerSession()
  const user = getUser()
  return (
    <div>
      <pre>
        {user && JSON.stringify(user)}
      </pre>
      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
    </div>
  );
}
