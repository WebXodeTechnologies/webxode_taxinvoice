import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { signIn } from "../utils/auth";

const page = () => {
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
            action={async () => {
              "use server";
              await signIn();
            }}
            className="flex flex-col gap-y-4"
          >
            <div className="flex flex-col gap-y-2">
              <label>Email</label>
              <Input placeholder="hello@gmail.com" />
            </div>
            <Button>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
