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
        hasUser: false,
        loading: false,
        user: {
            avatar_url: undefined,
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

        setGithubState(prevState => ({
            ...prevState,
            loading: !prevState.loading
        }))

        Api.get(`users/${username}`)
            .then((data) => {

                const {
                    avatar_url,
                    login,
                    name,
                    html_url,
                    blog,
                    company,
                    location,
                    followers,
                    following,
                    public_gists,
                    public_repos
                } = data.data;

                console.log(data.data);

                setGithubState(prevState => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        avatar_url: avatar_url,
                        login: login,
                        name: name,
                        html_url: html_url,
                        blog: blog,
                        company: company,
                        location: location,
                        followers: followers,
                        following: following,
                        public_gists: public_gists,
                        public_repos: public_repos,
                    }
                }))
            }).finally(() => {
                setGithubState(prevState => ({
                    ...prevState,
                    loading: !prevState.loading
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