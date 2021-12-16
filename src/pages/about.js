import React from 'react'
import { Footer } from '../components/footer'
import NavBar from '../components/remotenav'
import GlobalStyle from '../components/global/globalstyles'
export default function About (){
  return(
    <div>
      <GlobalStyle/>
      <NavBar/>
      <Footer/>
    </div>
  )
}