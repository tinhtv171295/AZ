import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBlock } from "../../mocks/type";
import { Autoplay, Pagination } from "swiper/modules";

export default function CarouselHomeSwiper({ dataContent }: IBlock) {
  return (
    <Stl.SwiperContainer>
      <Stl.Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        loop
      >
        {dataContent.map((slide, i) => (
          <Stl.SwiperSlide key={i}>
            <Stl.SwiperItem>
              <img src={slide.image} />
              <Stl.Title>{slide.title}</Stl.Title>
              {slide.content && (
                <Stl.BodyContent
                  dangerouslySetInnerHTML={{
                    __html: `${slide.content}`,
                  }}
                />
              )}
            </Stl.SwiperItem>
          </Stl.SwiperSlide>
        ))}
      </Stl.Swiper>
    </Stl.SwiperContainer>
  );
}

const Stl = {
  SwiperContainer: styled.div`
    height: 100%;
    width: 100%;
    margin: 50px 0;
  `,
  Swiper: styled(Swiper)``,
  SwiperSlide: styled(SwiperSlide)`
    background: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  SwiperItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    padding: 0 20px;
    height: 570px;
    width: 100%;
    position: relative;
    color: #fff;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    @media (min-width: 768px) {
      height: 700px;
      align-items: center;
    }
  `,
  Title: styled.h3`
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    font-size: 50px;
    line-height: 60px;
    margin: 0 0 10px;
    font-family: "ProximaNova-Bold", sans-serif;
    animation-delay: 0.5s;
    @media (min-width: 768px) {
      font-size: 55px;
      line-height: 66px;
    }
  `,
  BodyContent: styled.p`
    z-index: 1;
    font-size: 18px;
    margin: 0;
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
    line-height: 22px;
    animation-delay: 1s;
    @media (min-width: 768px) {
      max-width: 550px;
      text-align: center;
      font-size: 20px;
      line-height: 25px;
    }
  `,
};
