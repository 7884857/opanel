import type { PropsWithChildren, ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { beforeEach, vi } from "vitest";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { BrowserInit } from "@/app/browser-init";
import { cn } from "@/lib/utils";
import { googleSansCode, notoColorEmoji, notoSansSC } from "@/lib/fonts";
import { changeSettings } from "@/lib/settings";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, {
  wrapper: ({ children }: PropsWithChildren) => (
    <div className={cn(notoSansSC.className, notoColorEmoji.variable, googleSansCode.variable, "antialiased overflow-hidden")}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Toaster
          position="bottom-right"
          expand
          richColors/>
        {children}
      </ThemeProvider>
      <BrowserInit />
    </div>
  ),
  ...options
});

export * from "@testing-library/react";
export { customRender as render };

export function mockRealI18n() {
  vi.unmock("@/lib/i18n");

  beforeEach(() => {
    changeSettings("system.language", "zh-cn");
  });
}
