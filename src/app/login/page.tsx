"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import firebase_app from "@/lib/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  signInWithPhoneNumber,
  getAuth,
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";

export default function Login() {
  const formSchema = z.object({
    mobileNumber: z
      .string()
      .min(10, {
        message: "Mobile number should be 10 digits",
      })
      .max(10, {
        message: "Mobile number should be 10 digits",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobileNumber: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    handleLogin(values.mobileNumber);
  }

  async function handleLogin(mobileNumber: string) {
    try {
      const auth = getAuth(firebase_app);
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "send-code-button",
        {
          size: "invisible",
        }
      );
      const phoneNumber = "+91" + mobileNumber;
      await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier).then(
        async (verificationId: any) => {
          const code = window.prompt("Enter the OTP");
          console.log(code);
          
          if (code === null) return;
          console.log(verificationId.verificationId, code);
          
          const credential = await PhoneAuthProvider.credential(verificationId.verificationId, code);
           await signInWithCredential(auth, credential)
            .then((userCredential) => {
              console.log('User Logged In');
              
            })
            .catch((error) => {});
        }
      );
    } catch (error: any) {
      throw new Error(error);
    }
  }
  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Event Chalu Kare?</CardTitle>
          <CardDescription>Make your event always remember</CardDescription>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Mobile Number "
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button id="send-code-button" className="w-full" type="submit">
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
