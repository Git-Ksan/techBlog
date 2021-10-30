import styled  from "styled-components";

export const HeaderLStyle = styled.a`
    color: '#000000';

    /* 上下 | 左右*/
    padding: 0.5rem 0.75rem; 
    border-radius: 0.25rem;
    cursor: pointer;
    letter-spacing: 4px; /**文字の間 */

    &:hover {
        opacity: 0.5;
    }
`;