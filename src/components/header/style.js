import styled from 'styled-components'
export const Container = styled.section`
    color:#eee;
    background-image: linear-gradient( 235deg, 
        #FD6585 10%, 
        #0D25B9 100%);
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    h1{
        font-size:3rem;
        margin:2rem;
        margin-bottom:0;
        height:50%;
        display:flex;
        align-items:flex-end;
    }
    p{
        font-size:2rem;
        margin:2rem;
        margin-top:0;
        height:50%;
    }
    div{
        width:100%;
        height:70%;
        display:flex;
        justify-content:space-around;
        flex-direction:column;
    }
    img{
        width:100%;
    }
    figure{
        width:2rem;
    }
`
export const SocialBar = styled.section`
    width:100%;
    height:15%;
    display:flex;
    justify-content:flex-end;
`
export const Socials = styled.nav`
    width:30%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    a{
        cursor: pointer;
    }
    @media(max-width: 600px) {
        width:50%;
    }
`