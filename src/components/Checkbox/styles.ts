import styled from "styled-components";

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