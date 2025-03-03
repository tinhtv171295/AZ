import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBlock } from "../../mocks/type";
import { Pagination, Navigation } from "swiper/modules";
import LeftIcon from "../UI/Icons/Left";
import RightIcon from "../UI/Icons/Right";
import { ContainerStl } from "../../Styles/Container";
import TitleSecond from "../Titles/Second.title";

export default function CarouselMemberPartnerSwiper({
  dataContent,
  title,
  titleBody,
}: IBlock) {
  return (
    <ContainerStl>
      {title !== "" && <TitleSecond title={title} titleBody={titleBody} />}
      <Stl.BodyContainer>
        <Stl.Next className="next">
          <RightIcon />
        </Stl.Next>
        <Stl.Perv className="prev">
          <LeftIcon />
        </Stl.Perv>
        <Stl.Swiper
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          loop
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {dataContent.map((slide, i) => (
            <Stl.SwiperSlide key={i}>
              <Stl.Card>
                <img src={slide.image} />
                <Stl.Body>
                  <Stl.Title>{slide.title}</Stl.Title>
                  <Stl.Desc>{slide.description}</Stl.Desc>
                  <Stl.Divider></Stl.Divider>
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
      </Stl.BodyContainer>
    </ContainerStl>
  );
}

const Stl = {
  BodyContainer: styled.div`
    position: relative;
  `,
  Next: styled.div`
    display: none;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    margin-top: -40px;
    right: -50px;
    svg {
      width: 10px;
    }
    @media (min-width: 992px) {
      display: flex !important;
    }
  `,
  Perv: styled.div`
    display: none;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    margin-top: -40px;
    left: -50px;
    svg {
      width: 10px;
    }
    @media (min-width: 992px) {
      display: flex !important;
    }
  `,
  Swiper: styled(Swiper)`
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
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
        > div {
          > div {
            &:first-child {
              font-size: 24px;
              font-weight: 700;
            }
            &:nth-child(2) {
              font-size: 18px;
            }
            &:last-child {
              max-height: none;
              -webkit-line-clamp: initial;
            }
            max-height: none;
            -webkit-line-clamp: initial;
          }
        }
      }
    }
  `,
  Card: styled.div`
    width: 90%;
    box-shadow: inset 0 0 1px 1px #d0d0d0;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    img {
      width: 100%;
      max-height: 220px;
      object-fit: cover;
      object-position: top;
    }
  `,
  Body: styled.div`
    padding: 8px 24px 24px;
    line-height: 1.5;
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: 700;
  `,
  Divider: styled.div`
    margin: 10px 0;
    width: 80px;
    height: 4px;
    background-color: #428dff;
  `,
  Desc: styled.div`
    font-size: 16px;
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
