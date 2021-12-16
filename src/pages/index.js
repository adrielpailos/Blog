import React from 'react'
import { Header } from '../components/header'
import NavBar from '../components/remotenav'
import GlobalStyle from '../components/global/globalstyles'

export default function Index(){
  return(
    <div>
      <title>Blog</title>
      <GlobalStyle/>
      <Header/>
      <NavBar/>
    </div>
  )
}