import React, { createContext, use, useCallback, useState } from "react";
import { Api } from "../services/Api";

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: []
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: []
    });

    const getUser = (username) => {
        Api.get(`users/${username}`)
            .then(({ data: { user } }) => {
                setGithubState(prevState => ({
                    ...prevState,
                    user: {
                        login: user.login,
                        name: user.name,
                        html_url: user.html_url,
                        blog: user.blog,
                        company: user.company,
                        location: user.location,
                        followers: user.followers,
                        following: user.following,
                        public_gists: user.public_gists,
                        public_repos: user.public_repos,
                    }
                }))
            })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider;