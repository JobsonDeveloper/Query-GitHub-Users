import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";


const UseGithub = () => {
    const {githubState, getUser} = useContext(GithubContext);

    return {githubState, getUser}
}

export default UseGithub;