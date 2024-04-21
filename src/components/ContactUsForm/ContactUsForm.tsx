"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "../ui/card";
import firebase_app from "@/lib/config";

export default function ContactUsForm() {
  const formSchema = z.object({
    fullName: z.string().min(2).max(50),
    contactNumber: z.string().min(10).max(10),
    emailAddress: z.string().email(),
    message: z.string().min(10).max(5000),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      emailAddress: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    handleContactUs(values);
  }

  async function handleContactUs(values: any) {
    try {
      const db = getFirestore(firebase_app);
      const newContactUsRef = doc(collection(db, "contact-us"));
      await setDoc(newContactUsRef, {
        fullName: values.fullName,
        contactNumber: values.contactNumber,
        emailAddress: values.emailAddress,
        message: values.message,
      }).then(() => {
        toast("We got your request We Will Contact You Soon!",{
          icon: '👏',
          position: 'top-right',
        });
        form.setValue("fullName", "");
        form.setValue("contactNumber", "");
        form.setValue("emailAddress", "");
        form.setValue("message", "");
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
  return (
    <>
      <Toaster />
      <Card className="md:w-1/2 mx-4 md:ml-48  p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Mobile Number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Message" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </>
  );
}
