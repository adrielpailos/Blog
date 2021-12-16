import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { Slick } from './slick'
import * as S from './style'

export function Main (){
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        mains {   
          titlemyrepositories
        }
      }
    }
  `)
  const {
    titlemyrepositories
  } = data.blogdata.mains[0]
  return(
    <S.Container>
      <S.RepositoriesContent>
        <h2>{titlemyrepositories}</h2>
        <Slick />
      </S.RepositoriesContent>
    </S.Container>
    
  )
}