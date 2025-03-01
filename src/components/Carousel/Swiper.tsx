import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBlockContent } from "../../mocks/type";
import { useEffect, useState } from "react";

type Props = {
  slides: IBlockContent[];
};

export default function Carousel({ slides }: Props) {
  const [selected, setSelected] = useState(0);

  const handleChangeId = (id: number) => {
    setSelected(id);
  };

  const refresh = () => {
    const first = slides[0];
    if (first) {
      setSelected(0);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides]);

  return (
    <Stl.Container>
      <Stl.SwiperContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          loop
          autoplay={{ delay: 3000 }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Stl.Slide onClick={() => handleChangeId(i)}>
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
        <Stl.Title>{slides[selected]?.title}</Stl.Title>
        <Stl.Description>{slides[selected]?.description}</Stl.Description>
      </Stl.Content>
    </Stl.Container>
  );
}

const Stl = {
  Container: styled.div``,
  SwiperContainer: styled.div`
    height: 100%;
    width: 100%;
    margin: 50px 0;
  `,
  Slide: styled.div``,
  SlideImage: styled.div`
    border-radius: 15px;
  `,
  OverlayText: styled.div`
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transition: all 0.3sease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3sease;
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
