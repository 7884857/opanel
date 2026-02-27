"use client";

import { useState } from "react";
import { Unplug } from "lucide-react";
import { SubPage } from "../sub-page";
import { $ } from "@/lib/i18n";
import { ConfigItem, ConfigSection } from "@/components/config-item";
import { Switch } from "@/components/ui/switch";
import { Interface, InterfaceDescription, InterfaceRequest, InterfaceResponse } from "./interface";

export default function OpenAPI() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SubPage
      title={$("open-api.title")}
      description={$("open-api.description")}
      category={$("sidebar.config")}
      icon={<Unplug />}
      pageClassName="min-xl:px-64!">
      <ConfigSection>
        <ConfigItem name={$("open-api.item.enabled")}>
          <Switch
            checked={enabled}
            onCheckedChange={setEnabled}/>
        </ConfigItem>
      </ConfigSection>
      {enabled && (
        <>
          <h2 className="text-lg font-semibold pl-1 mb-3">{$("open-api.interfaces.title")}</h2>
          <ConfigSection>
            <Interface method="GET" route="/open-api/info">
              <InterfaceDescription>
                {$("open-api.interfaces.info.description")}
              </InterfaceDescription>
              <InterfaceRequest def={`{}`}/>
              <InterfaceResponse def={`{
  motd: string
  port: number
  maxPlayerCount: number
  whitelist: boolean
  uptime: number
  ingameTime: number
  system: {
    os: string
    arch: string
    cpuName: string
    cpuCore: number
    memory: number
    gpus: string[]
    java: string
  }
}`}/>
            </Interface>
            <Interface method="GET" route="/open-api/monitor">
              <InterfaceDescription>
                {$("open-api.interfaces.monitor.description")}
              </InterfaceDescription>
              <InterfaceRequest def={`{}`}/>
              <InterfaceResponse def={`{
  cpu: number
  memory: number
  tps: number
}`}/>
            </Interface>
            <Interface method="GET" route="/open-api/plugins">
              <InterfaceDescription>
                {$("open-api.interfaces.plugins.description")}
              </InterfaceDescription>
              <InterfaceRequest def={`{}`}/>
              <InterfaceResponse def={`{
  plugins: {
    fileName: string
    name: string
    version?: string
    description?: string
    authors: string[]
    website?: string
    icon?: string
    size: number
    enabled: boolean
    loaded: boolean
  }[]
}`}/>
            </Interface>
          </ConfigSection>
          <ConfigSection>
            <Interface method="GET" route="/open-api/players">
              <InterfaceDescription>
                {$("open-api.interfaces.players.description")}
              </InterfaceDescription>
              <InterfaceRequest def={`{}`}/>
              <InterfaceResponse def={`{
  players: {
    uuid: string
    name: string
  }[]
}`}/>
            </Interface>
            <Interface method="GET" route="/open-api/players/{uuid}">
              <InterfaceDescription>
                {$("open-api.interfaces.player.description")}
              </InterfaceDescription>
              <InterfaceRequest def={`{
  uuid: string // path param
}`}/>
              <InterfaceResponse def={`{
  name: string
  uuid: string
  isOnline: boolean
  isBanned: boolean
  gamemode: "adventure" | "creative" | "survival" | "spectator"
  banReason?: string
}`}/>
            </Interface>
          </ConfigSection>
        </>
      )}
    </SubPage>
  );
}

