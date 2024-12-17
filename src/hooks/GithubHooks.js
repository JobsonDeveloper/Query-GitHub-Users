import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";


const UseGithub = () => {
    const {githubState} = useContext(GithubContext);

    return {githubState}
}

export default UseGithub;