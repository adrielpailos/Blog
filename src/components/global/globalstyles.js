import { createGlobalStyle } from 'styled-components'
import "@fontsource/open-sans"

const GlobalStyle = createGlobalStyle`
    *{
        text-decoration:none;
        margin:0;
        padding:0;
        box-sizing:border-box;
        overflow-x:hidden;
        font-family: "Open Sans";
        &::-webkit-scrollbar {
            width:1em;
            background:rgba(45,45,45,1);
    
        }
        &::-webkit-scrollbar-thumb{
            background: rgba(30,30,30,1);
            border-radius: 100vw;
            border:solid .2em rgba(45,45,45,1);
            &:hover{
                background: rgba(250,250,250,.3);
                filter: brightness(500%);
            }
        }
        &::-webkit-scrollbar-track { 
            display:none;
        }
    }       
`
export default  GlobalStyle