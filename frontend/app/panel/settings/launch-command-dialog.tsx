import dynamic from "next/dynamic";
import { useEffect, useState, type PropsWithChildren } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
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
import { sendGetRequest, sendPostRequest, toastError } from "@/lib/api";
import { monacoSettingsOptions } from "@/lib/settings";
import { $ } from "@/lib/i18n";

const MonacoEditor = dynamic(() => import("@/components/monaco-editor"), { ssr: false });

export function LaunchCommandDialog({
  children,
  asChild
}: PropsWithChildren & {
  asChild?: boolean
}) {
  const { theme } = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [launchCommand, setLaunchCommand] = useState("");

  const fetchLaunchCommand = async () => {
    try {
      const { launchCommand } = await sendGetRequest<{ launchCommand: string }>("/api/control/launch-command");
      setLaunchCommand(launchCommand);
    } catch (e: any) {
      toastError(e, $("settings.server.launch-command.fetch.error"), [
        [401, $("common.error.401")],
        [500, $("common.error.500")]
      ]);
    }
  };

  const handleSave = async () => {
    try {
      await sendPostRequest("/api/control/launch-command", launchCommand);
      toast.success($("settings.server.launch-command.save.success"));
      setDialogOpen(false);
    } catch (e: any) {
      toastError(e, $("settings.server.launch-command.save.error"), [
        [400, $("common.error.400")],
        [401, $("common.error.401")],
        [500, $("common.error.500")]
      ]);
    }
  };

  useEffect(() => {
    if(!dialogOpen) return;

    fetchLaunchCommand();
  }, [dialogOpen]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{$("settings.server.launch-command")}</DialogTitle>
          <DialogDescription>
            {$("settings.server.launch-command.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="h-72 border rounded-md overflow-hidden">
          <MonacoEditor
            defaultLanguage="txt"
            value={launchCommand}
            theme={theme === "dark" ? "vs-dark" : "vs"}
            options={{
              minimap: { enabled: false },
              automaticLayout: true,
              tabSize: 2,
              ...monacoSettingsOptions
            }}
            onChange={(value) => setLaunchCommand(value ?? "")}/>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{$("dialog.cancel")}</Button>
          </DialogClose>
          <Button
            onClick={() => handleSave()}>
            {$("dialog.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
