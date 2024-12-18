import React, { useEffect, useState } from "react";
import * as S from "./StyleStarred";
import { RepositoryItem } from "../repositoryItem/RepositoryItem";
import UseGithub from "../../hooks/GithubHooks";
import { StarredItem } from "../starredItem/StarredItem";

export const Starreds = () => {
    const { githubState, getUserStarreds } = UseGithub();
    const [hasUserForSearchStarreds, sethasUserForSearchStarreds] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserStarreds(githubState.user.login);
        }

        sethasUserForSearchStarreds(!!githubState.starred);

    }, [githubState.user]);

    return (
        <>
            {hasUserForSearchStarreds ?
                <S.WrapperPanel>
                    <S.WrapperList>
                        {githubState.starred.map(item =>
                            <StarredItem
                                key={item.id}
                                props={{
                                    Name: item.name,
                                    linkToStarred: item.owner.html_url,
                                    fullName: item.full_name,
                                }}
                            />
                        )}
                    </S.WrapperList>
                </S.WrapperPanel>
                :
                <></>
            }
        </>
    )
}