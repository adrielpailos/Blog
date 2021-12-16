import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export default function NavBar (){
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        navigationRemoteBars {
          btnabout
          btnhome
        }
      }
    }
  `)
  const {
    btnabout,
    btnhome,
  } = data.blogdata.navigationRemoteBars[0]
  return(
    <S.Container>
      <nav>
        <Link to="/"><S.Button>{btnhome}</S.Button></Link>
        <Link to="/projects"><S.Button>MAIN</S.Button></Link>
        <Link to="/about"><S.Button>{btnabout}</S.Button></Link>
      </nav>
    </S.Container>
  )
}