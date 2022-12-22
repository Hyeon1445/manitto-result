import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow } from 'swiper'
import styled from '@emotion/styled'

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Container>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        onSlideChange={(slide) => {
          setActiveIndex(slide.activeIndex)
        }}
      >
        {Array(50)
          .fill(1)
          .map((slide, index) => (
            <SwiperSlide key={index}>
              <Content isSelected={index === activeIndex}>
                <p>
                  Sally Lee님의 <br /> 마니또는...
                </p>
                <LetterContainer>
                  <AnimatedMail className="animated-mail">
                    <BackFold />
                    <Letter className="letter">
                      <LetterBorder />
                      <LetterTitle />
                      <LetterContext />
                      <p>Bruno Lee님 입니다!</p>
                      <LetterStamp>
                        <LetterStampInner />
                      </LetterStamp>
                    </Letter>
                    <TopFold className="top-fold" />
                    <LetterBody />
                    <LeftFold />
                  </AnimatedMail>
                  <Shadow className="shadow" />
                </LetterContainer>
              </Content>
            </SwiperSlide>
          ))}
      </Swiper>
      <Index>{activeIndex}</Index>
    </Container>
  )
}

const Container = styled.div`
  background-color: #000;
`

const Index = styled.p`
  text-align: center;
  color: pink;
`
const Content = styled.div<{ isSelected: boolean }>`
  background-color: black;
  width: 10rem;
  height: 30rem;
  color: white;
  position: relative;
  opacity: ${({isSelected}) => !isSelected && '0.3'};
`

const LetterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:hover {
    .animated-mail {
      transform: translateY(50px);
      -webkit-transform: translateY(50px);
      -moz-transform: translateY(50px);
    }

    .animated-mail .top-fold {
      transition: transform 0.4s, z-index 0.2s;
      transform: rotateX(180deg);
      -webkit-transition: transform 0.4s, z-index 0.2s;
      -webkit-transform: rotateX(180deg);
      -moz-transition: transform 0.4s, z-index 0.2s;
      -moz-transform: rotateX(180deg);
      z-index: 0;
    }

    .animated-mail .letter {
      height: 180px;
    }

    .shadow {
      width: 250px;
    }
  }
`

const AnimatedMail = styled.div`
  position: absolute;
  height: 150px;
  width: 200px;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  transition: 0.4s;
`

const BackFold = styled.div`
  position: absolute;
  bottom: 0;
  width: 200px;
  height: 100px;
  background: #cf4a43;
  z-index: 0;
`

const Letter = styled.div`
  left: 20px;
  bottom: 0px;
  position: absolute;
  width: 160px;
  height: 60px;
  background: white;
  z-index: 1;
  color: black;
  overflow: hidden;
  -webkit-transition: 0.4s 0.2s;
  -moz-transition: 0.4s 0.2s;
  transition: 0.4s 0.2s;
`

const LetterBorder = styled.div`
  height: 10px;
  width: 100%;
  background: repeating-linear-gradient(
    -45deg,
    #cb5a5e,
    #cb5a5e 8px,
    transparent 8px,
    transparent 18px
  );
`

const LetterTitle = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 40%;
  background: #cb5a5e;
`

const LetterContext = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  height: 10px;
  width: 20%;
  background: #cb5a5e;
`

const LetterStamp = styled.div`
  margin-top: 30px;
  margin-left: 120px;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background: #cb5a5e;
  opacity: 0.3;
`

const LetterStampInner = styled.div``

const TopFold = styled.div`
  position: absolute;
  top: 50px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 100px 0 100px;
  -webkit-transform-origin: 50% 0%;
  -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  -moz-transform-origin: 50% 0%;
  -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  transform-origin: 50% 0%;
  transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  border-color: #cf4a43 transparent transparent transparent;
  z-index: 2;
`

const LetterBody = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100px 200px;
  border-color: transparent transparent #e95f55 transparent;
  z-index: 2;
`

const LeftFold = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 0 50px 100px;
  border-color: transparent transparent transparent #e15349;
  z-index: 2;
`

const Shadow = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  width: 400px;
  height: 30px;
  transition: 0.4s;
  transform: translateX(-50%);
  -webkit-transition: 0.4s;
  -webkit-transform: translateX(-50%);
  -moz-transition: 0.4s;
  -moz-transform: translateX(-50%);

  border-radius: 100%;
  background: radial-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
`
export default Main
