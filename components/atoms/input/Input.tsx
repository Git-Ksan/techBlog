import styled  from "styled-components";

export const Input = (props) => {

    const { placeholder = "", value = "", onChange} = props;
    return <SInput type="text" placeholder={placeholder} value ={value} onChange={onChange}/>;
};

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline:none;
`;