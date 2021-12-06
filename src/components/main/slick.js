import React from "react"
import { graphql , useStaticQuery } from "gatsby"
import Slider from "react-slick"
import * as S from "./style"
import { Link } from 'gatsby'


export function Slick (){
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
          repoimg01 {
            url
          }
          repoimg02 {
            url
          }
          repoimg03 {
            url
          }
          repoimg04 {
            url
          }
          repoimg05 {
            url
          }
          titlemyrepositories
          titlepicsbycode
          btnrepos
        }
      }
    }
  `)
  const {
    repoimg01,
    repoimg02,
    repoimg03,
    repoimg04,
    repoimg05,
    btnrepos
  } = data.blogdata.mains[0]

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <S.SlideContainer>
      <S.Sliders>
        <S.SliderFlex>
          <S.Repository img={repoimg01.url}>
            <nav>
              <Link href="https://acunitylanding.netlify.app/" target="_blank">
                <S.HoverButton>{btnrepos}</S.HoverButton>
              </Link>
            </nav>
          </S.Repository>
        </S.SliderFlex>
      </S.Sliders>
      <S.Sliders>
        <S.SliderFlex>
          <S.Repository img={repoimg02.url}>
            <nav>
              <Link href="https://inspiring-shaw-52512e.netlify.app/" target="_blank">
                <S.HoverButton>{btnrepos}</S.HoverButton>
              </Link>
            </nav>
          </S.Repository>
        </S.SliderFlex>
      </S.Sliders>
      <S.Sliders>
        <S.SliderFlex>
          <S.Repository img={repoimg03.url}>
            <nav>
              <Link href="https://agitated-wilson-ca113b.netlify.app/" target="_blank">
                <S.HoverButton>{btnrepos}</S.HoverButton>
              </Link>
            </nav>
          </S.Repository>
        </S.SliderFlex>
      </S.Sliders>
    </S.SlideContainer>
  );
}
