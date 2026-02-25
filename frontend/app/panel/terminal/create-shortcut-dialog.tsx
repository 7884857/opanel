import type { CommandShortcut } from "@/lib/types";
import { type PropsWithChildren, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { $ } from "@/lib/i18n";
import { googleSansCode } from "@/lib/fonts";

const SHORTCUT_NAME_MAX_LENGTH = 30;

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty($("terminal.shortcut.form.name.empty"))
    .max(
      SHORTCUT_NAME_MAX_LENGTH,
      $("terminal.shortcut.form.name.max-length", SHORTCUT_NAME_MAX_LENGTH.toString())
    ),
  command: z.string().trim().nonempty($("terminal.shortcut.form.command.empty"))
});

export function CreateShortcutDialog({
  children,
  asChild,
  onCreate
}: PropsWithChildren & {
  asChild?: boolean
  onCreate?: (shortcut: CommandShortcut) => void
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      command: ""
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const shortcut: CommandShortcut = {
      name: values.name.trim(),
      command: values.command.trim()
    };
    onCreate && onCreate(shortcut);

    form.reset();
    setDialogOpen(false);
  };

  useEffect(() => {
    if(!dialogOpen) {
      form.reset();
    }
  }, [dialogOpen, form]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle>{$("terminal.shortcut.create.title")}</DialogTitle>
              <DialogDescription>
                {$("terminal.shortcut.create.description")}
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{$("terminal.shortcut.form.name.label")}</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder={$("terminal.shortcut.form.name.placeholder")}
                      {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
            <FormField
              control={form.control}
              name="command"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{$("terminal.shortcut.form.command.label")}</FormLabel>
                  <FormControl>
                    <Input
                      className={googleSansCode.className}
                      autoComplete="off"
                      placeholder={$("terminal.shortcut.form.command.placeholder")}
                      {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
            <DialogFooter className="flex flex-row [&>*]:flex-1 [&_button]:cursor-pointer">
              <DialogClose asChild>
                <Button type="button" variant="outline">{$("dialog.cancel")}</Button>
              </DialogClose>
              <Button type="submit">{$("dialog.create")}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
