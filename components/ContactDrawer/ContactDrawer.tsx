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

export const ContactDrawer = () => {
  const { open, setOpen } = useContactContext();
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = () => {};
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
            <Input
              {...register("name")}
              type="text"
              placeholder="Name"
              className=""
            />
            <Input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className=""
            />
            <Textarea
              {...register("message")}
              placeholder="Message"
              className="resize-none"
            />
            <Button
              type="submit"
              className="w-full mt-2"
              disabled={!formState.isValid}>
              <SendIcon className="w-4 h-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
