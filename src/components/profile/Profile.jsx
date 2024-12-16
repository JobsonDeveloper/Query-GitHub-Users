import React from "react";
import * as S from "./StyledElements"; // Renomeando o componente

export const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/39008435?v=4" alt="Avatar do usuário" />

            <S.WrapperInfoUser>
                <h1>Jobson Oliveira</h1>
                <S.WrapperUserName>
                    <h3>Username: </h3>
                    <span>Oliveira</span>
                </S.WrapperUserName>

                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>

                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>

                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}