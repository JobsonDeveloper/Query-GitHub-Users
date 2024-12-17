import React from "react";

export const RepositoryItem = ({props}) => {

    const {Name, linkToRepo, fullName} = props;

    return (
        <section>
            <h2>{ Name }</h2>
            <h4>Full Name:</h4>
            <a
                href={linkToRepo}
                target="_blanck"
                rel="noreferrer">{ fullName }</a>
        </section>
    )
}