import { Children, memo } from "react";
import styled, { StyledComponent } from "styled-components";

export type ButtonDetail = {
    onClick?: () => void;
    BStyle?: StyledComponent<"button", any, {}, never>;
    children: React.ReactNode;
}

export const BaseButton = memo(function basebutton(props: ButtonDetail) {
    const { onClick, BStyle = BaseStyle, children } = props;

    return <BStyle onClick={onClick} key={"BaseButton"}>{children}</BStyle>; 
})


/** スタイル定義*/
export const BaseStyle = styled.button`
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 3px;

    &::active{
        /*ボタンを押したとき*/
        -webkit-transform: translateY(4px);
        transform: translateY(4px);/*下に動く*/
        border-bottom: none;/*線を消す*/
    }
`;