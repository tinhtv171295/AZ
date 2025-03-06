import BannerType from "../components/Banners/banner.type";
import BlockContentType from "../components/BlockContent/block.type";
import CarouselType from "../components/Carousels/carousel.type";
import FooterType from "../components/Footer/type";

export type BlockType =
  | BannerType
  | CarouselType
  | BlockContentType
  | FooterType;

export interface IBlock {
  title: string;
  titleBody?: string;
  linkDetail?: string;
  backgroundUrl?: string;
  backgroundColor?: string;
  content?: string;
  type: BlockType;
  dataContent: IBlockContent[];
}

export interface IBlockContent {
  icon?: string;
  title: string;
  description?: string;
  content?: string;
  image?: string;
  linkDetail?: string;
}
