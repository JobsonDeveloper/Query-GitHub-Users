import React, { useState } from "react";
import { Layout } from "./components/layout/Layout";
import { Profile } from "./components/profile/Profile";
import { ResetCss } from "./global/resetCss";
import { Repositories } from "./components/repositories/Repositories";
import { Starreds } from "./components/starreds/Starreds";
import { ButtonTabs } from "./components/buttons/ButtonsTabs";
import { WrapperButtons } from "./components/wrapperButtons/WrapperButtons";
import GithubProvider from "./providers/GithubProvider";
import UseGithub from "./hooks/GithubHooks";
import { NoSearch } from "./components/noSearch/NoSearch";

const App = () => {
  const [infoTable, setInfoTable] = useState("");
  const { githubState } = UseGithub();

  return (
    <>
      <Layout>
        {githubState.hasUser ?
          githubState.loading ? <section>Loading...</section> :
            <>
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
            </>

          :
          <NoSearch />
        }
      </Layout>
    </>
  );
}

export default App;