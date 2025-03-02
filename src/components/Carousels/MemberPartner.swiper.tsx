import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBlock } from "../../mocks/type";
import { Pagination, Navigation } from "swiper/modules";
import LeftIcon from "../UI/Icons/Left";
import RightIcon from "../UI/Icons/Right";
import { ContainerStl } from "../../Styles/Container";

export default function CarouselMemberPartnerSwiper({ dataContent }: IBlock) {
  return (
    <Stl.SwiperContainer>
      <ContainerStl>
        <Stl.Next className="next">
          <RightIcon />
        </Stl.Next>
        <Stl.Perv className="prev">
          <LeftIcon />
        </Stl.Perv>
        <Stl.Swiper
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          loop
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {dataContent.map((slide, i) => (
            <Stl.SwiperSlide key={i}>
              <Stl.Card>
                <img src={slide.image} />
                <Stl.Body>
                  <Stl.Title>{slide.title}</Stl.Title>
                  <Stl.Desc>{slide.description}</Stl.Desc>
                  {slide.content && (
                    <Stl.BodyContent
                      dangerouslySetInnerHTML={{
                        __html: `${slide.content}`,
                      }}
                    />
                  )}
                </Stl.Body>
              </Stl.Card>
            </Stl.SwiperSlide>
          ))}
        </Stl.Swiper>
      </ContainerStl>
    </Stl.SwiperContainer>
  );
}

const Stl = {
  SwiperContainer: styled.div`
    height: 100%;
    width: 100%;
    margin: 50px 0;
    position: relative;
  `,
  Next: styled.div`
    display: block;
    width: 16px;
    height: 16px;
    color: gray;
    position: absolute;
    right: -20px;
    bottom: 50%;
    cursor: pointer;
  `,
  Perv: styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    color: gray;
    position: absolute;
    left: -20px;
    bottom: 50%;
    cursor: pointer;
  `,
  Swiper: styled(Swiper)`
    padding-bottom: 50px;
  `,
  SwiperSlide: styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    &.swiper-slide-active {
      > div {
        width: 100%;
        img {
          max-height: 280px;
        }
        > div > div {
          max-height: none;
          -webkit-line-clamp: initial;
        }
      }
    }
  `,
  Card: styled.div`
    box-shadow: inset 0 0 1px 1px #d0d0d0;
    border-radius: 16px;
    overflow: hidden;
    width: 90%;
    img {
      width: 100%;
      height: 100%;
      max-height: 220px;
      object-fit: cover;
      object-position: top;
    }
  `,
  Body: styled.div`
    padding: 20px;
    line-height: 1.5;
  `,
  Title: styled.div`
    font-size: 24px;
    font-weight: 700;
    margin: 5px 0;
  `,
  Desc: styled.div`
    font-size: 18px;
    margin: 10px 0;
  `,
  BodyContent: styled.div`
    max-height: 268px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  `,
};
