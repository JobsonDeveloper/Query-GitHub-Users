import React from "react";
import * as S from "./StyledRepository";

export const RepositoryItem = ({props}) => {

    const {Name, linkToRepo, fullName} = props;

    return (
        <S.Wrapper>
            <S.WrapperTitle>{ Name }</S.WrapperTitle>
            <S.WrapperFullName>Full Name:</S.WrapperFullName>
            <S.WrapperLink
                href={linkToRepo}
                target="_blanck"
                rel="noreferrer">{ fullName }</S.WrapperLink>
        </S.Wrapper>
    )
}