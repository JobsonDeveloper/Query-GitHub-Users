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
            id: undefined,
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
                    id,
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

                setGithubState(prevState => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: id,
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

    const getUserRepos = async (username) => {
        await Api.get(`users/${username}/repos`)
            .then((data) => {
                setGithubState(prevState => ({
                    ...prevState,
                    repositories: data.data
                }))

            })
    }

    const getUserStarreds = async (username) => {
        await Api.get(`users/${username}/starred`)
            .then((data) => {
                setGithubState(prevState => ({
                    ...prevState,
                    starred: data.data
                }))

            })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarreds: useCallback((username) => getUserStarreds(username), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider;