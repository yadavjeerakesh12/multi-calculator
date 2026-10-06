import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const [signin, setSignin] = useState("signin");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    async function SignUp() {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: pass,
            options: {
                data: {
                    name: name
                }
            }
        });
        if (error) {
            Swal.fire({
                title: "Something is Wrong ! Check Details ",
                text: error.message,
                icon: "error",
                confirmButtonText: "OK"
            });
        } else {
            Swal.fire({
                title: "Successfull ",
                text: `Welcome to Multi Calculator System`,
                icon: "success",
                confirmButtonText: "OK"
            });
            setSignin(!signin)
            setEmail("")
            setPass("")
        }
    }
    async function Login() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass
        });
        if (error) {
            Swal.fire({
                title: "Check Your Password && Email",
                text: error.message,
                icon: "error",
                confirmButtonText: "OK"
            });
        } else {
            Swal.fire({
                title: "Great Login Successfull",
                text: `Successful Login`,
                icon: "success",
                confirmButtonText: "OK"
            });
            setEmail("")
            setPass("")
        }
        navigate("/")
    }
    //forget password
    const handleForgotPassword = async () => {
    const email = prompt("Enter your email");
    if (!email) return;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/login`,
    });
    if (error) {
        alert(error.message);
    } else {
        alert("Password reset email sent!");
    }
};

Button:
    return (
        <>
            <div className='flex justify-center items-center h-screen gap-5 flex-wrap '>
                {signin ?
                    // Login Page 
                    <div className="mx-auto grid w-full max-w-sm gap-4">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Enter your Email  & Password
                                </CardDescription>
                                <CardAction>
                                    <Button variant="link" onClick={() => setSignin(!signin)}>Sign Up</Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email-spacing">Email</Label>
                                            <Input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="email-spacing"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password-spacing">Password</Label>
                                                <Link
                                                    onClick={handleForgotPassword}
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                            <Input
                                                value={pass}
                                                onChange={(e) => setPass(e.target.value)}
                                                id="password-spacing" type="password" required placeholder="Enter Your Password " />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button onClick={Login} className="w-full">
                                    Login
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    // SignUp page 
                    :
                    <div className="mx-auto grid w-full max-w-sm gap-4">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Sign Up</CardTitle>
                                <CardDescription>
                                    Enter Your Valid Details
                                </CardDescription>
                                <CardAction>
                                    <Button variant="link" onClick={() => setSignin(!signin)}>Sign In</Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                id="name"
                                                type="text"
                                                placeholder="xyz....."
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email-spacing">Email</Label>
                                            <Input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="email-spacing"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password-spacing">Password</Label>
                                            </div>
                                            <Input
                                                value={pass}
                                                onChange={(e) => setPass(e.target.value)}
                                                id="password-spacing" type="password" required placeholder="Enter Strong Password " />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button onClick={SignUp} className="w-full">
                                    Sign Up
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>}


            </div>
        </>
    )
}
