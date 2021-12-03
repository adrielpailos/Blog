import styled, { keyframes } from 'styled-components'
export const Container = styled.section`
    color:#eee;
    background:rgba(45,45,45,1);
`
export const RepositoriesContent = styled.section`
    h2 {
        display:flex;
        align-items:end;
        justify-content:flex-end;
        height:10rem;
        width:40rem;
        font-size:3rem;
    }
`
export const SlideContainer = styled.section`
    height:30rem;
    display:flex;
    align-items:center;
    justify-content: center;

`
export const Sliders = styled.div`
    cursor:e-resize;
    display:flex;
    align-items:center;
    justify-content: center;
`
export const SliderFlex = styled.div`
    cursor:default;
    display:flex;
    justify-content:space-around;
    box-shadow: -10px 0px 13px -7px #000000, 
        10px 0px 13px -7px #000000, 
        5px 5px 15px 5px rgba(0,0,0,0);
    transition:1.5s;
`
/////////////////////SlidesImages///////////////////////
export const AnimateTranslate = keyframes`
    from{
        transform: translateX(0%);
        -webkit-transform: skew(36deg);
    }
    to{
        transform: translateX(200%);
            -webkit-transform: skew(20deg);
        width:18rem;
    }
`
export const AnimateButton = keyframes`
    to{
        -webkit-transform: skew(-18deg);
        color:#fff;
    }
`
export const Repository = styled.div`
    width:25rem;
    height:15.5rem;
    background: url(${props => props.img});
    background-size:cover;
    display:flex;
    justify-content:flex-end;
    nav{
        border-left:solid 0.2rem rgba(255,255,255,0.7);
        margin-right:-5.9rem;
        width: 5rem;
        height: 100%;
        -webkit-transform: skew(36deg);
        background:rgba(255,255,255,0.2333);
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }
    &:hover{
        nav{
            animation: ${AnimateTranslate} 1.5s ease-out;
            animation-delay:0.3s;
            animation-fill-mode: forwards;
            background:rgba(255,0,0,0.5339877);
            justify-content:center;
        }
        button{
            animation: ${AnimateButton} 1.5s ease-out;
            animation-fill-mode: forwards;
            animation-delay:0.95s;
        }
    }
`
export const HoverButton = styled.button`
    cursor: pointer;
    background:transparent;
    text-align: start;
    text-transform: uppercase;
    color: transparent;
    display:flex;
    align-items:center;
    width:10rem;
    height:2rem;
    border:none;
    border-left:solid #fff;
    margin-left:3rem;
    &::after{
        content:"";
        position: absolute;
        left:-4em;
        bottom:-.01em;
        background: #fff;
        width: 6rem;
        height: 3px;
    }
    padding:1em;
    -webkit-transform: skew(-28deg);
`
///////////////////////////////////////////////////////
////////////////MainSection2///////////////////////
export const Pictures = styled.section`
    display:flex;
    height:38rem;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    margin-bottom:5rem;
    span{
        align-self:start;
    }
    h2 {
        display:flex;
        align-items:end;
        justify-content:flex-end;
        height:10rem;
        width:40rem;
        font-size:3rem;
    }
`
export const WrapPic = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:90%;
    height:20rem;
    flex-wrap:wrap;
`
export const PicDiv = styled.div`
    background: url(${props => props.pic});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    box-shadow: -10px 0px 13px -7px #000000, 
    10px 0px 13px -7px #000000, 
    5px 5px 15px 5px rgba(0,0,0,0);
    height:15rem;
    width:23rem;
`