import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import * as S from './style'

export function Footer (){
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        footers {
					titleAbout
					aboutparagraph
				}	
      }
    }
  `)
  const {
		titleAbout,
		aboutparagraph,
  } = data.blogdata.footers[0]
  return(
    <S.Container>
				<div>
					<h2>{titleAbout}</h2>
					<p>{aboutparagraph}</p>
				</div>
				<div>
		
				</div>
    </S.Container>
  )
}