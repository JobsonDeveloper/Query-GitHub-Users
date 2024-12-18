import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { RepositoryItem } from "../repositoryItem/RepositoryItem";
import UseGithub from "../../hooks/GithubHooks";

export const Repositories = () => {

    const { githubState, getUserRepos } = UseGithub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
        }

        sethasUserForSearchRepos(!!githubState.repositories);
    }, [githubState.user]);

    return (
        <>
            {
                hasUserForSearchRepos ?
                    <S.WrapperPanel>
                        <S.WrapperList>
                            {githubState.repositories.map(item =>
                                <RepositoryItem
                                    key={item.id}
                                    props={{
                                        Name: item.name,
                                        linkToRepo: item.owner.html_url,
                                        fullName: item.full_name,
                                    }}
                                />
                            )}
                        </S.WrapperList>
                    </S.WrapperPanel>
                    :
                    <>
                    </>

            }
        </>
    )
}