"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type PropsWithChildren } from "react";
import { useTheme } from "next-themes";
import { SiModelcontextprotocol } from "@icons-pack/react-simple-icons";
import { Copy } from "lucide-react";
import { SubPage } from "../sub-page";
import { $ } from "@/lib/i18n";
import { Switch } from "@/components/ui/switch";
import { cn, copyToClipboard } from "@/lib/utils";
import { googleSansCode } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { monacoSettingsOptions } from "@/lib/settings";
import { sendGetRequest, sendPostRequest, toastError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { emitter } from "@/lib/emitter";
import { GenerateTokenDialog } from "./generate-token-dialog";

const MonacoEditor = dynamic(() => import("@/components/monaco-editor"), { ssr: false });

const mcpConfigJsonTemplate = `{
  "mcpServer": {
    "opanel": {
      "command": "npx",
      "args": [
        "opanel-mcp@latest",
        "--server", "{0}",
        "--token", "{1}"
      ]
    }
  }
}
`;

function ConfigItem({
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

export default function MCPConfiguration() {
  const { theme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const mcpConfigJson = mcpConfigJsonTemplate
    .replace("{0}", typeof window === "undefined" ? "" : window.location.origin)
    .replace("{1}", `{${$("mcp.config.access-token-placeholder")}}`);

  const fetchMcpEnabled = async () => {
    try {
      const { enabled: mcpEnabled } = await sendGetRequest<{ enabled: boolean }>("/api/mcp");
      setEnabled(mcpEnabled);
    } catch (e: any) {
      toastError(e, $("mcp.fetch-enabled.error"), [
        [401, $("common.error.401")],
        [500, $("common.error.500")]
      ]);
    }
  };

  const fetchMaskedAccessToken = async () => {
    try {
      const { maskedAccessToken } = await sendGetRequest<{
        maskedAccessToken: string | null
      }>("/api/mcp/token");
      setAccessToken(maskedAccessToken);
    } catch (e: any) {
      toastError(e, $("mcp.fetch-token.error"), [
        [401, $("common.error.401")],
        [500, $("common.error.500")]
      ]);
    }
  };

  const handleToggleMcp = async (enabled: boolean) => {
    try {
      await sendPostRequest(`/api/mcp?enabled=${enabled ? "1" : "0"}`);
      setEnabled(enabled);
    } catch (e: any) {
      toastError(e, enabled ? $("mcp.toggle.enable.error") : $("mcp.toggle.disable.error"), [
        [400, $("common.error.400")],
        [401, $("common.error.401")],
        [403, $("mcp.toggle.enable.error.403")],
        [500, $("common.error.500")]
      ]);
    }
  };

  useEffect(() => {
    fetchMcpEnabled();
    fetchMaskedAccessToken();

    emitter.on("refresh-data", () => fetchMaskedAccessToken());
  }, []);

  return (
    <SubPage
      title="MCP"
      description={$("mcp.description")}
      category={$("sidebar.config")}
      icon={<SiModelcontextprotocol />}
      pageClassName="min-xl:px-64!"
      className="[&>section]:bg-background [&>section]:dark:bg-transparent [&>section]:border [&>section]:rounded-md [&>section]:flex [&>section]:flex-col [&>section]:mb-4">
      <section>
        <ConfigItem
          name={$("mcp.item.enabled")}
          description={$("mcp.item.enabled.description")}>
          <Switch
            disabled={process.env.NODE_ENV !== "development" && window.location.protocol !== "https:"}
            checked={enabled}
            onCheckedChange={(enabled) => handleToggleMcp(enabled)}/>
        </ConfigItem>
      </section>
      <section>
        <ConfigItem name={$("mcp.item.access-token")}>
          <div className="w-full flex gap-2">
            <Input
              className={cn("flex-1 disabled:opacity-100", googleSansCode.className)}
              value={accessToken ?? $("mcp.token.not-generated")}
              disabled/>
            <GenerateTokenDialog asChild>
              <Button className="cursor-pointer">
                {$("mcp.token.generate")}
              </Button>
            </GenerateTokenDialog>
          </div>
        </ConfigItem>
        {enabled && (
          <ConfigItem name={$("mcp.item.config")}>
            <div className="w-full h-72 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 bottom-2 z-10 h-8 w-8 cursor-pointer"
                onClick={() => copyToClipboard(mcpConfigJson)}>
                <Copy />
              </Button>
              <MonacoEditor
                defaultLanguage="json"
                value={mcpConfigJson}
                theme={theme === "dark" ? "vs-dark" : "vs"}
                options={{
                  minimap: { enabled: false },
                  lineNumbers: "off",
                  automaticLayout: true,
                  tabSize: 2,
                  readOnly: true,
                  contextmenu: false,
                  scrollbar: {
                    vertical: "hidden",
                    handleMouseWheel: false
                  },
                  ...monacoSettingsOptions
                }}
                className="border rounded-md overflow-hidden"/>
            </div>
          </ConfigItem>
        )}
      </section>
    </SubPage>
  );
}
