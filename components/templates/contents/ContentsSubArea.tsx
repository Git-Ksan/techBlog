import styled from "styled-components";

export const ContentsSubArea = ({children}) => {
    return (
        <SubMain>
            {children}
        </SubMain>
    )
}

const SubMain = styled.main`
  width: 324px;
  border: solid;
  border: 1px solid;
  border-color: #c7c7c7;
  border-radius: 8px; /* 半径が8pxの角丸 */
  margin-top: 1.5rem;
`;