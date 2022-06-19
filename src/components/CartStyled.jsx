import styled from "styled-components";

export const Shopping = styled.div`
    position: fixed;
    right: 1%;
    top:10rem;
    min-height: 20%;
    max-height: 100%;
    width: 30%;
    background-color: #b8eeec;
    display:flex;
    color: #424c54;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: -5px 5px 5px 0px rgba(0,0,0,0.2);
    @media screen and (min-width : 320px) and (max-width : 480px) {
    font-size: 1rem;
    width: 98%;
  }
`
export const ButtonEnd = styled.button`
    font-size: 15px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #c3887d;
    border: none;
    box-shadow: -5px 5px 5px 0px rgba(0,0,0,0.2);
    @media screen and (min-width : 320px) and (max-width : 480px) {
    font-size: 1rem;
  }
    

`