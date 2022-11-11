import styled from "styled-components";

export const Container = styled.div`
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }

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

        
.ToastViewport {
    --viewport-padding: 25px;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: var(--viewport-padding);
    gap: 10px;
    width: 390px;
    max-width: 100vw;
    margin: 0;
    list-style: none;
    z-index: 2147483647;
    outline: none;
  }
  
  .ToastRoot {
    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    padding: 15px;
    display: grid;
    grid-template-areas: 'title action' 'description action';
    grid-template-columns: auto max-content;
    column-gap: 15px;
    align-items: center;
  }
  .ToastRoot[data-state='open'] {
    animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ToastRoot[data-state='closed'] {
    animation: hide 100ms ease-in;
  }
  .ToastRoot[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  .ToastRoot[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  .ToastRoot[data-swipe='end'] {
    animation: swipeOut 100ms ease-out;
  }
  
  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(calc(100% + var(--viewport-padding)));
    }
    to {
      transform: translateX(0);
    }
  }
  
  @keyframes swipeOut {
    from {
      transform: translateX(var(--radix-toast-swipe-end-x));
    }
    to {
      transform: translateX(calc(100% + var(--viewport-padding)));
    }
  }
  
  .ToastTitle {
    grid-area: title;
    margin-bottom: 5px;
    font-weight: 500;
    color: var(--slate12);
    font-size: 15px;
  }
  
  .ToastDescription {
    grid-area: description;
    margin: 0;
    color: var(--slate11);
    font-size: 13px;
    line-height: 1.3;
  }
  
  .ToastAction {
    grid-area: action;
  }
`;