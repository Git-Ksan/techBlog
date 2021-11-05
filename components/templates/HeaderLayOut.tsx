import { HeaderMain } from "../organisms/header/HeaderMain";

export const HeaderOnly = (props) => {
    const { children } = props;

    // eslint-disable-next-line react/display-name
    return (
        <>
            <HeaderMain></HeaderMain>
            {children}
        </>
    )
}