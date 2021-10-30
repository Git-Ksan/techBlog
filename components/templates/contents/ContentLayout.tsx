import styled from "styled-components";

export default function ContentLayout({children}) {
    return (
        <HDiv>
            {children}
        </HDiv>        
    )
  }
  
  const HDiv = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-areas: "sidebar main";
    grid-template-columns: 1fr 3fr;
    margin-top: 10%;

    width: 100%;
    max-width: 1200px;
    align-content: center;

    text-align: left;
    margin: 0 auto;
    padding: 0 1em;
    z-index: 0;
    `;
