import React from "react";
import * as S from "./StyledElements"; // Renomeando o componente
import UseGithub from "../../hooks/GithubHooks";

export const Profile = () => {

    const { githubState } = UseGithub()

    return (
        <S.Wrapper>
            <S.WrapperImage src={githubState.user.avatar_url} alt="Avatar do usuário" />

            <S.WrapperInfoUser>
                <h1>{githubState.user.name}</h1>

                <S.WrapperUserGeneric>
                    <h3>Username: </h3>
                    <a
                        href={githubState.user.html_url}
                        target="_blanck"
                        rel="noreferrer">{githubState.user.login}</a>
                </S.WrapperUserGeneric>

                <S.WrapperUserGeneric>
                    <h3>Company: </h3>
                    <span>{githubState.user.company}</span>
                </S.WrapperUserGeneric>

                <S.WrapperUserGeneric>
                    <h3>Location: </h3>
                    <span>{githubState.user.location}</span>
                </S.WrapperUserGeneric>

                <S.WrapperUserGeneric>
                    <h3>Blog: </h3>
                    <a
                        href={githubState.user.blog}
                        target="_blanck"
                        rel="noreferrer">
                        {githubState.user.blog}
                    </a>
                </S.WrapperUserGeneric>

                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>

                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>

                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>

                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}