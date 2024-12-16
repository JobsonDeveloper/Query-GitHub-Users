import React, { useState } from "react";
import { Layout } from "./components/layout/Layout";
import { Profile } from "./components/profile/Profile";
import { ResetCss } from "./global/resetCss";
import { Repositories } from "./components/repositories/Repositories";
import { Starreds } from "./components/starreds/Starreds";
import { ButtonTabs } from "./components/buttons/ButtonsTabs";
import { WrapperButtons } from "./components/wrapperButtons/WrapperButtons";

const App = () => {
  const [infoTable, setInfoTable] = useState("");

  return (
    <main>
      <ResetCss />
      <Layout>
        <Profile />
        <WrapperButtons>
          <ButtonTabs onClick={() => setInfoTable("repositories")}>Repositories</ButtonTabs>
          <ButtonTabs onClick={() => setInfoTable("starreds")}>Starreds</ButtonTabs>
        </WrapperButtons>

        {infoTable === "repositories" &&
          <Repositories />
        }

        {infoTable === "starreds" &&
          <Starreds />
        }
      </Layout>
    </main>
  );
}

export default App;