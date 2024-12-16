import React from "react";

export const Layout = ({ children }) => {
    return (
        <section>
            <header>Header</header>
            {children}
        </section>
    )
}