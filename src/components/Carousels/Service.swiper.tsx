import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import TitleSecond from "../Titles/Second.title";
import { ContainerStl } from "../../Styles/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import CardIcon from "../Card/CardIcon";

export default function CarouselServiceSwiper({
  type,
  title,
  titleBody,
  dataContent,
  backgroundColor,
}: IBlock) {
  return (
    <Stl.Wrap data-carousel={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <TitleSecond title={title} titleBody={titleBody} />
        <Stl.Body>
          <Stl.Swiper
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            loop
          >
            {dataContent.map((slide, i) => (
              <Stl.Slide key={i}>
                <CardIcon
                  icon={
                    <span
                      dangerouslySetInnerHTML={{ __html: `${slide.image}` }}
                    />
                  }
                  title={slide.title}
                  content={slide.description}
                  linkDetail={slide.linkDetail}
                />
              </Stl.Slide>
            ))}
          </Stl.Swiper>
        </Stl.Body>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string; $backgroundColor?: string }>`
    padding: 60px 0;
    ${({ $backgroundUrl, $backgroundColor }) =>
      $backgroundUrl !== undefined
        ? `
            background: url(${$backgroundUrl}) no-repeat 50% 50% fixed;
            background-size: cover;
            color: ${$backgroundColor ? $backgroundColor : "#fff"};
            min-height: 600px;
      `
        : `${$backgroundColor ? `background: ${$backgroundColor};` : ""}`}
  `,
  Body: styled.div``,
  Swiper: styled(Swiper)`
    position: relative;
    padding-bottom: 30px;
  `,
  Slide: styled(SwiperSlide)`
    height: auto;
    text-align: center;
    margin-bottom: 0;
  `,
};
