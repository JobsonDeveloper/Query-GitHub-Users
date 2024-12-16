import React from "react";
import { Layout } from "./components/layout/Layout";
import { Profile } from "./components/profile/Profile";

function App() {
  return (
    <main>
      <Layout>
        <Profile />

        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>  
  );
}

export default App;
