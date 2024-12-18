import React from "react";
import * as S from "./StyledStarred";

export const StarredItem = ({ props }) => {

    const { Name, linkToStarred, fullName } = props;

    return (
        <S.Wrapper>
            <S.WrapperTitle>{Name}</S.WrapperTitle>
            <S.WrapperFullName>Full Name:</S.WrapperFullName>
            <S.WrapperLink
                href={linkToStarred}
                target="_blanck"
                rel="noreferrer">{fullName}</S.WrapperLink>
        </S.Wrapper>
    )
}