import styled from 'styled-components'
export const Container = styled.section`
    display:flex;
    width:100%;
    height:15%;
    align-self:baseline;
    background: rgba(30,30,30,1);
    nav{
        width:20rem;
        height:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
`
export const Button = styled.button`
    color:#fff;
    cursor: pointer;
    background-image: linear-gradient(122deg, 
        rgba(30,30,30,1) 0%, 
        rgba(90,90,90,1)  51%, 
        rgba(50,50,50,1)  100%)}
    background-size: 300%;
    width:7rem;
    height:3rem;
    text-align: center;
    text-transform: uppercase;
    transition: 1.15s;
    box-shadow: 1px 1px 2px 0px rgba(90,90,90,1);
    border-radius: 0.1px;
    border:none;
    &:hover {
        background-position: right center;
        color: #eee;
    }  
`