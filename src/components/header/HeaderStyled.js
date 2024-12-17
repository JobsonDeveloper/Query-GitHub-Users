import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between ;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 400;
    }

    button {
        background-color:rgb(46, 171, 255);
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;

        &:hover {
            box-shadow: 1px 1px 5px #000;
            background-color:rgb(36, 130, 193);
            color: #fff;
        }
    }
`;