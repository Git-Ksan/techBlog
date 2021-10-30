import { memo } from "react";
import styled, { StyledComponent } from "styled-components";
import Link from "next/link";

export type Link = {
    name: string;
    url?: string;
    LStyle?: StyledComponent<"a", any, {}, never>;
}

export const BaseLink = memo((props: Link) => {
    const { name, url = "", LStyle = BaseStyle} = props;

    return (
        <>
            <Link href={url}>
               <LStyle>{name}</LStyle>
            </Link>
        </>
    );
})


/** スタイル定義*/
const BaseStyle = styled.a`

    color: #000000;

    /* 上下 | 左右*/
    padding: 0.5rem 0.75rem; 
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;