
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { auth, signIn } from "../utils/auth";
import { SubmitButton } from "../components/SubmitButtons";
import { redirect } from "next/navigation";

export default async function Login() { 
   const session = await auth();

   if (session?.user) {
    redirect("/dashboard");
   }
   
  return (
    <div className="flex h-screen w-full px-4 items-center justify-center">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData) => {
              "use server";
              await signIn("nodemailer",formData);
            }}
            className="flex flex-col gap-y-4"
          >
            <div className="flex flex-col gap-y-2">
              <label>Email</label>
              <Input name="email" type="email" required placeholder="hello@gmail.com" />
            </div>
            <SubmitButton text="Login"/>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};


