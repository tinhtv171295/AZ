import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBlock } from "../../mocks/type";
import { useEffect, useState } from "react";
import { ContainerStl } from "../../Styles/Container";

export default function Carousel({ dataContent, title }: IBlock) {
  const [selected, setSelected] = useState(0);

  const handleChangeId = (id: number) => {
    setSelected(id);
  };

  const refresh = () => {
    const first = dataContent[0];
    if (first) {
      setSelected(0);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataContent]);

  return (
    <ContainerStl>
      <Stl.TitleTop dangerouslySetInnerHTML={{ __html: title }}></Stl.TitleTop>
      <Stl.SwiperContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          loop
          autoplay={{ delay: 3000 }}
        >
          {dataContent.map((slide, i) => (
            <SwiperSlide key={i}>
              <Stl.Slide
                className={selected === i ? "active" : ""}
                onClick={() => handleChangeId(i)}
              >
                <Stl.SlideImage>
                  <img src={slide.image} />
                </Stl.SlideImage>
                <Stl.OverlayText>{slide.title}</Stl.OverlayText>
              </Stl.Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stl.SwiperContainer>

      <Stl.Content>
        <Stl.Title>{dataContent[selected]?.title}</Stl.Title>
        <Stl.Description>{dataContent[selected]?.description}</Stl.Description>
      </Stl.Content>
    </ContainerStl>
  );
}

const Stl = {
  SwiperContainer: styled.div`
    height: 100%;
    width: 100%;
    margin: 50px 0;
  `,
  TitleTop: styled.div`
    max-width: 550px;
    margin: 0 auto 40px;
    text-align: center;
  `,
  Slide: styled.div`
    width: 255px;
    margin-right: 30px;
    cursor: pointer;
    &:hover > strong {
      letter-spacing: 0.5em;
      width: 100%;
      text-align: center;
    }
    &.active {
      a {
        &::after {
          opacity: 0;
        }
      }
      strong {
        opacity: 0;
      }
    }
  `,
  SlideImage: styled.a`
    border-radius: 15px;
    display: block;
    position: relative;
    overflow: hidden;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;
    &::after {
      content: "";
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
    img {
      display: block;
    }
  `,
  OverlayText: styled.strong`
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    color: #fff;
    font-size: 20px;
    z-index: 1;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-family: "ProximaNova-Bold", sans-serif;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  `,
  Content: styled.div`
    margin-top: 20px;
    text-align: center;
  `,
  Title: styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 10px 0;
  `,
  Description: styled.div`
    font-size: 16px;
    color: #666;
  `,
};
