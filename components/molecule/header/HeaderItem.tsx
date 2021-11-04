import { memo } from "react";
import styled from "styled-components";
import { BaseLink , Link}  from "../../atoms/link/BaseLink"
import { HeaderLStyle } from "../../atoms/link/HeaderLink";
import Image from 'next/image'


export const HeaderItem = memo(() => {

    //ヘッダーに表示するリスト 増やしたい時はここいじる
    let dispList : Array<Link> = [
        {name: "Home", url:"/", LStyle: HeaderLStyle},
        {name: "パソコン", url:"/",  LStyle: HeaderLStyle},
        {name: "エンジニア", url:"/",  LStyle: HeaderLStyle},
        {name: "試作一覧", url:"/load/home",  LStyle: HeaderLStyle},
        {name: "コンタクト", url:"/",  LStyle: HeaderLStyle},
    ];

    return (
        <HDiv>
            <Image src="/React-icon.png" alt="React Logo" width={60} height={40} />
            {dispList.map((list, index) => (
                <BaseLink name={list.name} url={list.url} LStyle ={list.LStyle} key={index}/>
            ))}
        </HDiv>
    );
})

const HDiv = styled.div`
    display: flex;
    margin-left: 1rem;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
    height: 3.5rem;
`;