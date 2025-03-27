"use client";
import { useContactContext } from "@/context/ContactContext";
import { Drawer, DrawerContent, DrawerTitle } from "../ui/drawer";
import { useForm } from "react-hook-form";
import { contactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import { ContactFormValues } from "./types";
import { toast } from "sonner";
import { useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export const ContactDrawer = () => {
  const { open, setOpen } = useContactContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setLoading(false);
      if (!response.ok) {
        toast.error("Something went wrong", {
          description: result.error,
        });
      } else {
        toast.success("Message sent!", {
          description: "I will get back to you as soon as possible.",
        });
        reset();
        setOpen(false);
      }
    } catch (error) {
      toast.error("Unexpected error", {
        description: JSON.stringify(error),
      });
    }
  };
  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}>
      <DrawerTitle className="sr-only">Contact Gabriel</DrawerTitle>
      <DrawerContent className="bg-slate-100 dark:bg-zinc-900 max-w-lg mx-auto">
        <div className="px-8 pt-4 pb-12 mx-auto">
          <h2 className="font-clash font-medium text-center text-3xl text-teal-950 dark:text-white">
            Connect with me
          </h2>
          <p className="text-center mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            My inbox is always open, whether you have a project or just want to
            say Hi. I would love to hear from you.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-6 mt-10 flex flex-col">
            <div>
              <Input
                {...register("name")}
                type="text"
                placeholder="Name"
                className=""
              />{" "}
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className=""
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Textarea
                {...register("message")}
                placeholder="Message"
                className="resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full mt-2"
              disabled={!isValid || loading}>
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  <SendIcon className="w-4 h-4 mr-2" />
                  Send
                </>
              )}
            </Button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
