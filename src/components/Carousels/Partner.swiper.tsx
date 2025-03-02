import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBlock } from "../../mocks/type";
import { Grid, Pagination } from "swiper/modules";
import { ContainerStl } from "../../Styles/Container";
import TitleSecond from "../Titles/Second.title";

export default function CarouselPartnerSwiper({
  dataContent,
  title,
  titleBody,
}: IBlock) {
  return (
    <ContainerStl>
      <TitleSecond title={title} titleBody={titleBody} />
      <Stl.SwiperContainer>
        <Stl.Swiper
          spaceBetween={10}
          slidesPerView={2}
          grid={{ rows: 2, fill: "row" }}
          modules={[Grid, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 4,
              grid: { rows: 2, fill: "row" },
            },
          }}
        >
          {dataContent.map((slide, i) => (
            <Stl.SwiperSlide key={i}>
              <a>
                <img src={slide.image} alt={slide.title} />
              </a>
            </Stl.SwiperSlide>
          ))}
        </Stl.Swiper>
      </Stl.SwiperContainer>
    </ContainerStl>
  );
}

const Stl = {
  SwiperContainer: styled.div`
    position: relative;
  `,
  Swiper: styled(Swiper)`
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
  `,
  SwiperSlide: styled(SwiperSlide)`
    background: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: block;
      text-align: center;
      font-size: 0;
      img {
        max-height: 80px;
      }
    }
  `,
};
