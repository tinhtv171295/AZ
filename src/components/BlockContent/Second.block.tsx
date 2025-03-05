import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import TitleSecond from "../Titles/Second.title";
import { Swiper, SwiperSlide } from "swiper/react";
import CardInfo from "../Card/CardInfo";
import { Autoplay } from "swiper/modules";

export default function BlockSecond({
  type,
  title,
  titleBody,
  backgroundUrl,
  backgroundColor,
  dataContent,
  linkDetail,
}: IBlock) {
  return (
    <Stl.Wrap
      data-component={type}
      $backgroundUrl={backgroundUrl}
      $backgroundColor={backgroundColor}
    >
      <ContainerStl>
        <TitleSecond
          title={title}
          titleBody={titleBody}
          linkDetail={linkDetail}
        />
        <Stl.WrapItem>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop
          >
            {dataContent.map((item, i) => (
              <SwiperSlide>
                <CardInfo key={i} data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stl.WrapItem>
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
  WrapItem: styled.div``,
  Item: styled.div`
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    min-height: 330px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;

    @media (min-width: 992px) {
      padding: 20px 60px;
    }
  `,
  ItemThumb: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 20px;
    a > img {
      max-width: 100%;
    }
  `,
  ItemTitle: styled.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: bold;
  `,
  ItemSummary: styled.p`
    margin: 0 0 25px;
    font-size: 14px;
    color: #828282;
    line-height: 18px;
  `,
};
