import type { PropsWithChildren } from "react";
import type { LucideIcon } from "lucide-react";

export function ConfigSection({ children }: PropsWithChildren) {
  return (
    <section className="bg-background dark:bg-transparent border rounded-md flex flex-col mb-4">
      {children}
    </section>
  );
}

export function ConfigItem({
  icon,
  name,
  description,
  children
}: PropsWithChildren & {
  icon?: LucideIcon
  name: string
  description?: string
}) {
  const Icon = icon;

  return (
    <div className="flex items-center flex-wrap gap-2 px-4 py-3 border-b last:border-b-0">
      {Icon && <Icon size={17}/>}
      <div className="mr-auto flex flex-col gap-1">
        <span className="text-sm">{name}</span>
        {description && (
          <span className="text-xs text-muted-foreground">{description}</span>
        )}
      </div>
      {children}
    </div>
  );
}
