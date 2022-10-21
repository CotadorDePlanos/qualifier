import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .required {
        border: 3px solid;
        border-color: red;
    }
`;
export const CheckboxContainer = styled.div<{ checked: boolean; }>`
    justify-content:center;
    height: 35px;
    padding-left: 5px;
    margin: 15px 4px;
    border-radius: 5px;
    background-color: ${props => props.checked ? '#97C160' : '#E5E5E5'};
    display: flex;
    align-items: center;
`;
export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
   overflow: hidden;
   white-space: nowrap;width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0;
`;
export const Text = styled.label<{ checked: boolean; }>`
   color: ${props => props.checked ? '#FFF' : '#555'};
`;
export const StyledCheckbox = styled.label<{ checked: boolean; }>`
   width: 23px;
   height: 23px;
   margin-right: 6px;
   border-radius: 50%;
   background: #F6F6F6;
   display: flex;
   justify-content: center;
   align-items: center;
   svg {
      display: ${props => props.checked ? 'flex' : 'none'};
      filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
   }
`;