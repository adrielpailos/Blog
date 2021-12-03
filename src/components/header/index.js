import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import { NavBar } from '../remotenav'
import { Link } from 'gatsby'
import * as S from './style'

export function Header (){
  const data = useStaticQuery(graphql`
    query {
      blogdata {
        headers {
          codepenimg {
            url
          }
          githubimg {
            url
          }
          instaimg {
            url
          }
          linkedinimg {
            url
          }
          paragraph
          title
        }
      }
    }
  `)
  const {
    codepenimg,
    githubimg,
    instaimg,
    linkedinimg,
    paragraph,
    title
  } = data.blogdata.headers[0]
  return(
    <S.Container>
      <S.SocialBar>
        <S.Socials>
          <Link href="https://www.instagram.com/dri_ph/" target="_blank">
            <figure>
              <img src={instaimg.url} alt="instagramIcon"/>
            </figure>
          </Link>
          <Link href="https://github.com/adrielpailos" target="_blank">
            <figure>
              <img src={githubimg.url} alt="githubIcon"/>
            </figure>
          </Link>
          <Link href="https://www.linkedin.com/in/adriel-pailos-254ba01bb" target="_blank">
            <figure>
              <img src={linkedinimg.url} alt="linkedinIcon"/>
            </figure>
          </Link>
          <Link href="https://codepen.io/dri-ph" target="_blank">
            <figure>
              <img src={codepenimg.url} alt="codepenIcon"/>
            </figure>
          </Link>
        </S.Socials>
      </S.SocialBar>
      <div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
      <NavBar/>
    </S.Container>
  )
}