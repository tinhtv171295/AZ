import React from "react";
import BlockContentSecond from "../components/BlockContentOld/Second.block";
import { IBlock } from "../mocks/type";
import BlockContentEight from "../components/BlockContentOld/Eight.block";
import FixedBanner from "../components/Banners/Fixed.banner";
import ScrollBanner from "../components/Banners/Scroll.banner";
import BlockFirst from "../components/BlockContent/First.block";
import BlockThird from "../components/BlockContent/Third.block";
import BlockFour from "../components/BlockContent/Four.block";
import BlockFive from "../components/BlockContent/Five.block";
import BlockSix from "../components/BlockContent/Six.block";
import BlockSeven from "../components/BlockContent/Seven.block";
import Carousel from "../components/Carousels/Swiper";
import CauroselPartnerSwiper from "../components/Carousels/Partner.swiper";
import CarouselMemberPartnerSwiper from "../components/Carousels/MemberPartner.swiper";

export default function RenderLayout(block: IBlock) {
  switch (block.type) {
    case "banner-fixed":
      return <FixedBanner {...block} />;
    case "banner-scroll":
      return <ScrollBanner {...block} />;

    case "block-first":
      return <BlockFirst {...block} />;
    case "block-second":
      return <BlockContentSecond {...block} />;
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
      return <BlockContentEight {...block} />;
    case "swiper-corevalue":
      return <Carousel {...block} />;
    case "swiper-partner":
      return <CauroselPartnerSwiper {...block} />;
    case "swiper-memberpartner":
      return <CarouselMemberPartnerSwiper {...block} />;
    default:
      return <React.Fragment>aaa</React.Fragment>;
  }
}
