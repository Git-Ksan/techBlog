import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

/** 大見出し用 記事タイトル*/
export const H1 = memo(({children}) => {
    return (
        // eslint-disable-next-line react/display-name
        <H1Style key={"H1"}>{children}</H1Style>
    );
})


/** スタイル定義*/
const H1Style = styled.h1`
    color: black;

    font-size: 2.5rem;
    font-family: sans-serif;
    letter-spacing: 5px;
    line-height: 1.2;
    font-weight: bold;
    overflow-wrap: break-word;
`;