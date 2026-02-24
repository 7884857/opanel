import { cn, copyToClipboard } from "@/lib/utils";
import { $ } from "@/lib/i18n";
import { Input } from "./ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function TextCopy({
  text,
  className,
  ...props
}: React.ComponentProps<typeof Input> & {
  text: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        className={cn("cursor-pointer", className)}
        onClick={() => copyToClipboard(text)}>
        <Input
          value={text}
          readOnly
          {...props}/>
      </TooltipTrigger>
      <TooltipContent>
        {$("text-copy.copy")}
      </TooltipContent>
    </Tooltip>
  );
}
