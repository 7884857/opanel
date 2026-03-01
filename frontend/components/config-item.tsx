import type { PropsWithChildren } from "react";

export function ConfigSection({ children }: PropsWithChildren) {
  return (
    <section className="bg-background dark:bg-transparent border rounded-md flex flex-col mb-4">
      {children}
    </section>
  );
}

export function ConfigItem({
  name,
  description,
  children
}: PropsWithChildren & {
  name: string
  description?: string
}) {
  return (
    <div className="flex justify-between items-center flex-wrap gap-2 px-4 py-3 border-b last:border-b-0">
      <div className="flex flex-col gap-1">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
      {children}
    </div>
  );
}
