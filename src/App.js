import React from "react";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/39008435?v=4" alt="Avatar do usuário" />
          <h1>Jobson Oliveira</h1>
          <h3>Username: </h3>
          <span>Oliveira</span>

          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>

          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </div>


        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>  
  );
}

export default App;
