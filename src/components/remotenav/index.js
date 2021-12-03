import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import * as S from './style'
import { Link } from 'gatsby'

export function NavBar (){
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
        <S.Button><Link to="/footer">{btnabout}</Link></S.Button>
        <S.Button>{btnhome}</S.Button>
      </nav>
    </S.Container>
  )
}