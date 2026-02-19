"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
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
import { Button } from "@/components/ui/button";
import { TextCopy } from "@/components/text-copy";
import { sendPostRequest, toastError } from "@/lib/api";
import { emitter } from "@/lib/emitter";
import { $ } from "@/lib/i18n";

export function GenerateTokenDialog({
  children,
  asChild
}: PropsWithChildren & {
  asChild?: boolean
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  const generateToken = async () => {
    try {
      setGenerating(true);
      const { accessToken } = await sendPostRequest<{ accessToken: string }>("/api/mcp/token");
      setToken(accessToken);
      emitter.emit("refresh-data");
    } catch (e: any) {
      setToken(null);
      toastError(e, $("mcp.dialog.generate.error"), [
        [401, $("common.error.401")],
        [500, $("common.error.500")]
      ]);
    } finally {
      setGenerating(false);
    }
  };

  useEffect(() => {
    if(dialogOpen) {
      generateToken();
    } else {
      setToken(null);
      setGenerating(false);
    }
  }, [dialogOpen]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{$("mcp.dialog.title")}</DialogTitle>
          <DialogDescription>
            {$("mcp.dialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex justify-center">
          <TextCopy
            text={token ?? (generating ? $("mcp.dialog.status.generating") : $("mcp.dialog.status.error"))}
            className="w-full"/>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{$("dialog.close")}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
