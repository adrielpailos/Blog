import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import * as S from './style'
import { Link } from 'react-scroll'

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
       <Link to="about"><S.Button>{btnabout}</S.Button></Link>
        <S.Button>{btnhome}</S.Button>
      </nav>
    </S.Container>
  )
}