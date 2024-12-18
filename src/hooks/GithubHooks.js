import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";


const UseGithub = () => {
    const {githubState, getUser, getUserRepos, getUserStarreds} = useContext(GithubContext);

    return {githubState, getUser, getUserRepos, getUserStarreds}
}

export default UseGithub;