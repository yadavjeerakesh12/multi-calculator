import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { supabase } from '../../supabaseClient';
import Swal from 'sweetalert2';
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();


  async function Save() {
    
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase
      .from('User_response')
      .insert([{
        name: name,
        email: email,
        message: message,
        user_id: user.id
      }])
    if (error) {
      Swal.fire({
        title: "Something is Wrong ! Check Details ",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK"
      });
    }else{
      Swal.fire({
        title: "Done",
        text: "Thanks For Sharing Your Valuable Information",
        icon: "success",
        confirmButtonText: "OK"
      });
    }
  }
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm sm:max-w-md">
          <Card className="w-full">
            <CardHeader className="text-center sm:text-left">
              <CardTitle className="text-xl sm:text-2xl">
                Contact
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Share to me Your Valuable Thought!
              </CardDescription>
            </CardHeader>
            <form>
              <CardContent>
                <div className="flex flex-col gap-5 sm:gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                      id="name"
                      type="text"
                      placeholder="Your Good Name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">
                      Message for Me!
                    </Label>
                    <Textarea
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                      id="message"
                      required
                      placeholder="Write Your Information regarding Projects"
                      className="min-h-32 w-full resize-y"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button
                  className="w-full"
                  onClick={Save}
                >
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                >
                  <Link target='_blank' rel="noopener noreferrer" to="https://github.com/yadavjeerakesh12">Check My Github Account</Link>
                  
                </Button>
                <Button

                  variant="outline"
                  className="w-full"
                >
                  <Link target='_blank' to="https://www.linkedin.com/in/rakesh-yadav12?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  rel="noopener noreferrer"
                  >
                  Access My LinkedIn Account
                  </Link>
                  
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>



    </>
  )
}
