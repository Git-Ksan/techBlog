import styled from "styled-components";

export const ContentsMainArea = ({children}) => {
    return (
        <SMain>
            {children}
        </SMain>
    )
}

const SMain = styled.main`
  width: 700px;
  border: solid;
  border: 1px solid;
  border-color: #c7c7c7;
  border-radius: 8px; /* 半径が8pxの角丸 */
  min-height: 100vh;
  margin-top: 1.5rem;
  padding: 50px;
`;