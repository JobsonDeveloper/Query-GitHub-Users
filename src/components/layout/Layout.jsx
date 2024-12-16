import React from "react";
import * as S from './Styled';

export const Layout = ({ children }) => {
    return (
        <S.WrapperLayout>
            <header>Header</header>
            {children}
        </S.WrapperLayout>
    )
}