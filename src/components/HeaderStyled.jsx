import styled from "styled-components";

export const HeaderContainer = styled.header`
    width:100%;
    height: 8rem;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(73, 186, 181, 0.5);
    padding-top: 5px;
`
export const ButtonDiv = styled.div`
    display:flex;
    align-items: center;
`
export const CartButton = styled.button`
    position: fixed;
    border: none;;
    justify-content: space-around;
    color: white;
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
        img {
            max-width: 40%;
        }
    @media screen and (min-width : 320px) and (max-width : 480px) {
        position: relative;
    }
`
export const LogoHeader = styled.img`
    width: 35%;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`
