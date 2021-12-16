import styled from 'styled-components'

export const Container = styled.section`
    display:flex;
    height:90vh;
    background: rgba(30,30,30,1);
    color:rgba(120,120,120,1);
    align-items:center;
    justify-content:center;
    flex-direction:column;
    span{
        height:10%;
        width:80%;
    }
    h2{
        border-bottom:solid 1px;
        display:flex;
        align-items:end;
        justify-content:flex-end;
        width:25%;
        height:100%;
        padding-right:0.5rem;
    }
    div{
        border-bottom:solid 1px;
        border-left:solid 1px;
        height:60%;
        width:80%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
    }
    p{
        margin:1rem;
    }
    @media(max-width: 800px) {
        div{   
            width:100%;
            margin-left:1rem;
            margin-right:1rem;
        }
    }
`