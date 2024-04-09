"use client";
import React from "react";
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
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

const RegisterInputField = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [isValid, setIsValid] = React.useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    if (email.length === 0) {
      return null;
    }
    setIsValid(
      email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false
    );
    setButtonDisabled(
      email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? false : true
    );
  };

  const validatePassword = (password: string) => {
    if (password.length === 0) {
      return null;
    }
    const hasNumber = /\d/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    setIsValid(
      hasNumber && hasUpper && hasLower && hasSpecial && isLongEnough
        ? true
        : false
    );
    setButtonDisabled(
      hasNumber && hasUpper && hasLower && hasSpecial && isLongEnough
        ? false
        : true
    );
  };

  const handleEmailChange = (value: string) => {
    validateEmail(value);
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    validatePassword(value);
    setPassword(value);
  };
  const signUp = () => {
    try {
      toast.success("Account created successfully!");
      router.push("/auth/login");
    } catch (error: unknown) {
      toast.error("An error occurred. Please try again later.");
    }
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle data-testid="cypress-registerTitle">
          Create a new account
        </CardTitle>
        <CardDescription data-descId="cypress-registerDesc">
          Create a simple account in just a few easy steps
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input
                data-cy="email"
                id="email"
                placeholder="harrypotter@wizardboards.co.uk"
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input
                data-cy="password"
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => handlePasswordChange(e.target.value)}
              />
              <p className="text-sm">
                <span className="text-red-500">*</span>
                <strong className="font-bold">At least: </strong>
                <span className="font-semibold">8</span> characters,
                <span className="font-semibold">1</span> number,
                <span className="font-semibold">1</span> special character
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Toaster />
        <Button onClick={signUp} disabled={buttonDisabled} data-cy="login-btn">
          Create
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterInputField;
