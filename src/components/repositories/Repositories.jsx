import React from "react";
import * as S from "../panel/WrapperPanel";
import { RepositoryItem } from "../repositoryItem/RepositoryItem";

export const Repositories = () => {
    return (
        <S.WrapperPanel>
            <RepositoryItem
                props={{
                    Name: "app-ideas",
                    linkToRepo: "https://github.com/benits/app-ideas",
                    fullName: "benits/app/-ideas",
                }}
            />
        </S.WrapperPanel>
    )
}