import { ChangeEvent, memo, useState } from "react";
import styled from "styled-components";
import { Input } from "../../../atoms/input/Input";
import { BaseButton } from "../../../atoms/button/BaseButton";
import { PrimaryBStyle } from "../../../atoms/button/PrimaryButton";
import { P } from "../../../atoms/contents/P";
import { useAuth } from "../../../../hooks/useAuth";

/** コンテンツの本文 */
export const Login = memo(() => {

    const [usrId, setUsrId] = useState<string>('');
    const { login , loading} = useAuth();
    //入力した文字を格納
    const onChageUserId = (e: ChangeEvent<HTMLInputElement>) => setUsrId(e.target.value);
    //ログインロジック呼び出し
    const onClickLogin = () => login(usrId);

    return (
        <>
            <HDiv>
                <P>ログイン画面</P>
                <Input placeholder="IDを入力" value={usrId} onChange={onChageUserId} key={1}/>
                <BaseButton BStyle ={PrimaryBStyle} onClick={onClickLogin}  key={2}>ログイン</BaseButton>
            </HDiv>
        </>
    );
})

const HDiv = styled.div`

    align-content: center;
    text-align: center;

    border: solid;
    border: 1px solid;
    border-color: #c7c7c7;
    border-radius: 8px; /* 半径が8pxの角丸 */
    padding: 10px;
    height: 150px;
`;