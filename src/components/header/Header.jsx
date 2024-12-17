import React, { useState } from "react";
import * as S from "./HeaderStyled";
import UseGithub from "../../hooks/GithubHooks";

export const Header = () => {
    const { getUser } = UseGithub();
    const [userName, setUserName] = useState();

    const submitGetUser = () => {
        if(userName) {
            getUser(userName);
            return;
        }

        return;
    }

    return (
        <S.StyledHeader>
            <input
                type="text"
                placeholder="Digite o username para pesquisa"
                onChange={(e) => { setUserName(e.target.value) }}
            />

            <button 
            type="submit"
            onClick={submitGetUser}
            >
                BUSCAR
            </button>
        </S.StyledHeader>
    )
}