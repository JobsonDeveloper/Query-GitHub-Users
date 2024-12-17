import React from "react";
import * as S from './Styled';
import { Header } from "../header/Header";
import UseGithub from "../../hooks/GithubHooks";

export const Layout = ({ children }) => {

    return (
        <S.WrapperLayout>
            <Header />
            {children}
        </S.WrapperLayout>
    )
}