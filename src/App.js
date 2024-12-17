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
          <section>
            Nenhum usuário pesquisado
          </section>
        }
      </Layout>
    </>
  );
}

export default App;