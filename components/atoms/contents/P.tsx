import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

/** コンテンツの本文 */
export const P = memo(function p({children}){
    return (
        <P1Style key={"P1"}>{children}</P1Style>
    );
})


/** スタイル定義*/
const P1Style = styled.p`
    color: black;

    display: block;
    font-size: 1rem;
    letter-spacing: 4px; /**文字の間 */
    font-family: sans-serif;
    margin-block-start: 1em;
    margin-block-end: 1em;
    overflow-wrap: break-word;
`;