import { memo } from "react";
import { HeaderMain } from "../organisms/header/HeaderMain";

export const HeaderOnly = memo(function headeronly(){
    return (
        <>
            <HeaderMain></HeaderMain>
        </>
    )
})