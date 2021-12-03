import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { Slick } from './slick'
import * as S from './style'

export function Main (){
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        mains {
          pic01 {
            url
          }
          pic02 {
            url
          }
          pic03 {
            url
          }
          titlemyrepositories
          titlepicsbycode
        }
      }
    }
  `)
  const {
    pic01,
    pic02,
    pic03,
    titlemyrepositories,
    titlepicsbycode
  } = data.blogdata.mains[0]
  return(
    <S.Container>
      <S.RepositoriesContent>
        <h2>{titlemyrepositories}</h2>
        <Slick />
      </S.RepositoriesContent>
      <S.Pictures>
        <span>
          <h2>{titlepicsbycode}</h2>
        </span>
        <S.WrapPic>
          <S.PicDiv pic={pic01.url}>
          </S.PicDiv>
          <S.PicDiv pic={pic02.url}>   
          </S.PicDiv>
        </S.WrapPic>
      </S.Pictures>
    </S.Container>
    
  )
}