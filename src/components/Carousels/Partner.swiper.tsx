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
          slidesPerView={4}
          grid={{ rows: 2, fill: "row" }}
          modules={[Grid, Pagination]}
          loop
        >
          {dataContent.map((slide, i) => (
            <Stl.SwiperSlide key={i}>
              <img src={slide.image} />
            </Stl.SwiperSlide>
          ))}
        </Stl.Swiper>
      </Stl.SwiperContainer>
    </ContainerStl>
  );
}

const Stl = {
  SwiperContainer: styled.div`
    height: 100%;
    width: 100%;
    margin: 50px 0;
  `,
  Swiper: styled(Swiper)``,
  SwiperSlide: styled(SwiperSlide)``,
};
