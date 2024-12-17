import React from "react";
import * as S from "../panel/WrapperPanel";
import { RepositoryItem } from "../repositoryItem/RepositoryItem";

export const Starreds = () => {
    return (
        <S.WrapperPanel>
            <RepositoryItem
                props={{
                    Name: "benits",
                    linkToRepo: "https://github.com/benits/benits",
                    fullName: "benits/benits"
                }}
            />
        </S.WrapperPanel>
    )
}