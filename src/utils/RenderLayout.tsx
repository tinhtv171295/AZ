import React from "react";
import { IBlock } from "../mocks/type";
import FixedBanner from "../components/Banners/Fixed.banner";
import ScrollBanner from "../components/Banners/Scroll.banner";
import BlockFirst from "../components/BlockContent/First.block";
import BlockThird from "../components/BlockContent/Third.block";
import BlockFour from "../components/BlockContent/Four.block";
import BlockFive from "../components/BlockContent/Five.block";
import BlockSix from "../components/BlockContent/Six.block";
import BlockSeven from "../components/BlockContent/Seven.block";
import Carousel from "../components/Carousels/Swiper";
import CarouselPartnerSwiper from "../components/Carousels/Partner.swiper";
import CarouselMemberPartnerSwiper from "../components/Carousels/MemberPartner.swiper";
import CarouselHomeSwiper from "../components/Carousels/HomeCarousel.swiper";
import BlockEight from "../components/BlockContent/Eight.block";
import BlockSecond from "../components/BlockContent/Second.block";
import BlockNine from "../components/BlockContent/Nine.block";
import BlockTen from "../components/BlockContent/Ten.block";
import BlockEleven from "../components/BlockContent/Eleven.block";

export default function RenderLayout(block: IBlock) {
  switch (block.type) {
    case "banner-fixed":
      return <FixedBanner {...block} />;
    case "banner-scroll":
      return <ScrollBanner {...block} />;

    case "block-first":
      return <BlockFirst {...block} />;
    case "block-second":
      return <BlockSecond {...block} />;
    case "block-third":
      return <BlockThird {...block} />;
    case "block-four":
      return <BlockFour {...block} />;
    case "block-five":
      return <BlockFive {...block} />;
    case "block-six":
      return <BlockSix {...block} />;
    case "block-seven":
      return <BlockSeven {...block} />;
    case "block-eight":
      return <BlockEight {...block} />;
    case "block-nine":
      return <BlockNine {...block} />;
    case "block-ten":
      return <BlockTen {...block} />;
    case "block-eleven":
      return <BlockEleven {...block} />;
    case "swiper-core-value":
      return <Carousel {...block} />;
    case "swiper-partner":
      return <CarouselPartnerSwiper {...block} />;
    case "swiper-member-partner":
      return <CarouselMemberPartnerSwiper {...block} />;
    case "swiper-home":
      return <CarouselHomeSwiper {...block} />;
    default:
      return <React.Fragment>aaa</React.Fragment>;
  }
}
