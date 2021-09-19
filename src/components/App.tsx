import { FC } from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider, SplitCol, SplitLayout, Epic, View } from "@vkontakte/vkui";
import { useStructure } from "@unexp/router";
import { Loader } from "../panels/LoaderPanel";

export const App: FC = () => {
  const structure = useStructure({ view: "main", panel: "loader" });

  return <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <SplitLayout>
          <SplitCol>
            <Epic activeStory={structure.view}>
              <View id="main" activePanel={structure.panel}>
                <Loader id="loader"/>
              </View>
            </Epic>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
}