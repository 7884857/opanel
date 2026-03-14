import { useState } from "react";
import { RestartAlert } from "@/components/restart-alert";

export function useRestartAlert() {
  const [open, setOpen] = useState(false);

  return {
    restartAlert: <RestartAlert open={open} onOpenChange={setOpen}/>,
    openRestartAlert() {
      setOpen(true);
    }
  };
}
