import styled  from "styled-components";

export const PrimaryBStyle = styled.button`
    position: relative;
    display: inline-block;
    margin-left: 6px;
    padding: 6px 24px;
    text-decoration: none;
    color: #FFF;
    background: #0edaa7;/*背景色*/
    border-bottom: solid 2px #0d9b62;/*少し濃い目の色に*/
    border-radius: 4px;/*角の丸み*/
    box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
    font-weight: bold;
    
    &:active{
        /*ボタンを押したとき*/
        -webkit-transform: translateY(4px);
        transform: translateY(4px);/*下に動く*/
        border-bottom: none;/*線を消す*/
    }
`