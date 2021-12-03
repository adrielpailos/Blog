import * as React from 'react'
import { Header } from '../components/header'
import { Main } from '../components/main'
import { Footer } from '../components/footer'
import GlobalStyle from '../components/global/globalstyles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Index(){
  return(
    <div>
      <title>Blog</title>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}