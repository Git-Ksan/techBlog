import { memo } from "react";
import styled from "styled-components";
import { HeaderItem } from "../../molecule/header/HeaderItem";


export const HeaderMain = memo(() => {
    // eslint-disable-next-line react/display-name
    return (
        <HStyle>
            <HNav>
                <HeaderItem/>
            </HNav>
        </HStyle>
    )
})

const HStyle = styled.header`
	position: sticky;
    z-index: 50;
    top: 0px;
`;

const HNav = styled.nav`
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    width: 100vw;
    border-left: 0;
    border-bottom: #dfdfdf solid 2px;
    color: black;
    letter-spacing: 2px;
    font-weight: 700;
`;

