import { toast } from "sonner";
import { restartServer } from "@/lib/api";
import { $ } from "@/lib/i18n";
import { Alert } from "./alert";

let isToastActive = false;

export function RestartAlert({
  open,
  onOpenChange
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Alert
      open={open}
      onOpenChange={onOpenChange}
      title={$("restart-alert.title")}
      description={$("restart-alert.description")}
      onAction={() => restartServer()}/>
  );
}

export function toastRestartAlert() {
  if(isToastActive) return;
  
  isToastActive = true;
  toast.warning($("restart-alert.title"), {
    duration: Infinity,
    action: {
      label: $("restart-alert.action"),
      onClick: () => restartServer()
    },
    onDismiss: () => {
      isToastActive = false;
    }
  });
}
