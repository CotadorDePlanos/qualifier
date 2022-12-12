import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#25CD89' : '#16195C'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #496459;
    }
`;
