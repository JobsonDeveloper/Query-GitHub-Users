import styled from "styled-components";

export const ButtonTabs = styled.button`
    color: #000;
    border: 1px solid #ccc;
    outline: none;
    padding: 4px 8px;
    height: max-content;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s;

    &:focus {
        background-color: #2c8ccb;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        color: #fff;
        border-bottom: none;
        padding: 8px;
    }
`;