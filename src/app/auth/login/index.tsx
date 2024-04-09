"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Router from "next/router";

const LoginInputField = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(validatePassword(password));
  }, [password]);

  const isDisabled = !isEmailValid || !isPasswordValid;

  const validateEmail = (email: string) => {
    if (email.length === 0) {
      return false;
    }
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
  };

  const validatePassword = (password: string) => {
    if (password.length === 0) {
      return false;
    }
    return password.length >= 8 ? true : false;
  };

  const handleLogin = () => {
    console.log("Login");
    validateEmail(email);
    validatePassword(password);
    Router.push("/play");
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle data-testid="cypress-loginTitle">
          Login in to your account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input
                data-cy="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input
                data-cy="password"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link href="/auth/password-reset">Forgot your password?</Link>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button disabled={isDisabled} onClick={handleLogin} data-cy="login-btn">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginInputField;
