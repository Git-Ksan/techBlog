import { memo } from "react";
import styled, { StyledComponent } from "styled-components";

/** 中見出し用 段落タイトル*/
export const H2 = memo(({children}) => {
    return (
        // eslint-disable-next-line react/display-name
        <H2Style key={"H2"}>{children}</H2Style>
    );
})


/** スタイル定義*/
const H2Style = styled.h2`
    color: black;

    /**上下のmargin */
    margin-top: 30px;
    margin-bottom: 30px;

    padding: 20px;    /**文字と上下線の間 */

    border-left: 0;
    font-size: 1.5rem;
    /**上下線 */
    border-top: #dfdfdf solid 2px;
    border-bottom: #dfdfdf solid 2px;
    letter-spacing: 5px;
    font-weight: 700;
    overflow-wrap: break-word;
    line-height: 35px;
`;