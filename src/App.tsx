import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Navigation } from 'swiper'
import styled from '@emotion/styled'

const initialSlideIndex = 20

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex)

  return (
    <Container>
      <Title>Merry Christmas ~ ☆</Title>
      <Description>편지를 열어 마니또를 확인해 보세요!</Description>
      {Array(20)
        .fill(1)
        .map((snow, index) => (
          <SnowFlake className="snowflake" key={`snow-1-${index}`}>
            ❅
          </SnowFlake>
        ))}
      {Array(20)
        .fill(1)
        .map((snow, index) => (
          <SnowFlake className="snowflake" key={`snow-2-${index}`}>
            ❆
          </SnowFlake>
        ))}
      <SwiperContainer>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={3}
          navigation
          initialSlide={initialSlideIndex}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
          onSlideChange={(slide) => {
            setActiveIndex(slide.activeIndex)
          }}
        >
          {Array(50)
            .fill(1)
            .map((slide, index) => (
              <SwiperSlide key={index}>
                <Content isSelected={index === activeIndex}>
                  <CarouselTitle className="no-select">
                    <Name>Sally Lee</Name>님의 <br /> 마니또는...
                  </CarouselTitle>
                  <LetterContainer>
                    <AnimatedMail className="animated-mail">
                      <BackFold />
                      <Letter className="letter">
                        <LetterBorder />
                        <LetterTitle />
                        <LetterContext />
                        <Manitto className="no-select">
                          <Name>Sally Lee</Name>님 입니다!
                        </Manitto>
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
      </SwiperContainer>
    </Container>
  )
}

const Title = styled.h1`
  font-size: 12px;
  position: absolute;
  color: white;
  padding: 1rem;
`
const Description = styled.h2`
  font-size: 16px;
  position: absolute;
  color: white;
  padding: 1rem;
  top: 1.2rem;
`

const Container = styled.div`
  position: relative;
  background-image: url('./tree3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 30rem;
  margin: 0 auto;
  height: 100vh;
  .swiper-button-prev {
    width: 2.2rem;
    height: 1.5rem;
    border-radius: 8px;
    background-color: #222;
    &::after {
      content: '<A';
      color: white;
      font-size: 16px;
    }
  }
  .swiper-button-next {
    width: 2.2rem;
    height: 1.5rem;
    border-radius: 8px;
    background-color: #222;
    &::after {
      content: 'Z>';
      color: white;
      font-size: 16px;
    }
  }
  @-webkit-keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @-webkit-keyframes snowflakes-shake {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    50% {
      -webkit-transform: translateX(80px);
      transform: translateX(80px);
    }
  }
  @keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowflakes-shake {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(80px);
    }
  }
  .snowflake {
    position: fixed;
    top: -10%;
    z-index: 3;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
  }
  .snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
  }
  .snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
  }
  .snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, 0.5s;
    animation-delay: 6s, 0.5s;
  }
  .snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
  }
  .snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
  }
  .snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
  }
  .snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
  }
  .snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2.5s, 1s;
    animation-delay: 2.5s, 1s;
  }
  .snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
  }
  .snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1.5s;
    animation-delay: 3s, 1.5s;
  }
  .snowflake:nth-of-type(10) {
    left: 25%;
    -webkit-animation-delay: 2s, 0s;
    animation-delay: 2s, 0s;
  }
  .snowflake:nth-of-type(11) {
    left: 65%;
    -webkit-animation-delay: 4s, 2.5s;
    animation-delay: 4s, 2.5s;
  }
`

const Content = styled.div<{ isSelected: boolean }>`
  width: 10rem;
  height: 18rem;
  position: relative;
  opacity: ${({ isSelected }) => !isSelected && '0.5'};
`
const SwiperContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding-top: 16rem;
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
  background: #04653e;
`

const LetterContext = styled.div`
  margin-top: 6px;
  margin-left: 5px;
  height: 10px;
  width: 20%;
  background: #cb5a5e;
`

const LetterStamp = styled.div`
  margin-top: 10px;
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

const SnowFlake = styled.div`
  color: #fff;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #000;
`

const CarouselTitle = styled.p`
  color: white;
  font-size: 14px;
  background-color: black;
  padding: 0.5rem;
  border-radius: 8px;
`
const Manitto = styled.p`
  padding: 0 1rem;
  font-weight: bold;
  font-size: 12px;
`
const Name = styled.span`
  font-weight: 900;
  font-size: 14px;
`
export default Main
