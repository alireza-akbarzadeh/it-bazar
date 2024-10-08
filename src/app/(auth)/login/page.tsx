import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { UserAuthForm } from "@/domains/auth/user-auth-form";

import { Icon } from "@/shared/components";
import {
  buttonVariants,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { cn } from "@/shared/utils";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <Icon name="chevron-left" iconClassName="mr-2 size-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <Card className="flex flex-col space-y-2 text-center">
          <CardHeader>
            <CardTitle>Logo Welcome back</CardTitle>
            <CardDescription className="text-muted-foreground text-bodySmall">
              Enter your email to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense>
              <UserAuthForm />
            </Suspense>
          </CardContent>
          <CardFooter className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
