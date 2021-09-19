import { FC } from "react";
import { Panel, PanelProps, Spinner } from "@vkontakte/vkui";
import { useRouter } from "@unexp/router";
import { useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";

export const Loader: FC<PanelProps> = ({ id }) => {
  const router = useRouter();

  useEffect(() => {
    bridge.send("VKWebAppStorageGet", { keys: ["group"] })
      .then(data => data.keys[0].value ? router.push({ view: "schedule", panel: "main" }) : router.push({ panel: "onboarding" }))
      .catch(e => router.push({ panel: "error" }))
  }, []);

  return <Panel id={id} centered>
    <Spinner size="medium" />
  </Panel>
}