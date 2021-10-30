import { HeaderMain } from "../organisms/header/HeaderMain";

export const HeaderOnly = (props) => {
    const { children } = props;

    return (
        <>
            <HeaderMain></HeaderMain>
            {children}
        </>
    )
}