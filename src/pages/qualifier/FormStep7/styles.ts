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
    h2 {
        margin: 0;
        padding: 0;
        font-size: 18px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;

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

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;

export const IconArea = styled.div`
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: #B8B8D4 ;
    display: inline-block;
    justify-content: center;
    align-items: center;

`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center
    flex: 1;
    margin: 10px;
`;

export const Right =  styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center
    flex: 1;
    margin: 10px;
    width: 100%;
`;

export const Left =  styled.div`
    display: block;
    text-align: center;
    width: 100%;
`;
