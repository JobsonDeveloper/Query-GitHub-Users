import React from "react";
import { ResetCss } from "./global/resetCss";
import GithubProvider from "./providers/GithubProvider";
import App from "./App";

export const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCss />
                <App />
            </GithubProvider>
        </main>
    )
}