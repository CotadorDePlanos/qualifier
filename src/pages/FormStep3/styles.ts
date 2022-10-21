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
        border: 2px solid;
        border-color: red;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }

    .dropdown {
        position: relative;
        margin: 20px 10px;
        width: 100%;
    }

    .dropdown button {
        width: 100%;
        height:100%;
        border-radius: 10px;
        text-align: center
    }
      
    .menu {
        position: absolute;
        list-style-type: none;
        margin: 5px 0;
        padding: 0;
        border: 1px solid grey;
        width: 200px;
    }
    
    .menu > li {
        margin: 0;
        background-color: Black;
    }
    
    .menu > li:hover {
        background-color: lightgray;
    }
    
    .menu > li > button {
        width: 100%;
        height: 100%;
        text-align: left;
        
        background: none;
        color: inherit;
        border: none;
        padding: 5px;
        margin: 0;
        font: inherit;
        cursor: pointer;
    }
`;