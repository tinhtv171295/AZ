export type BlockType =
  | "banner-fixed"
  | "banner-scroll"
  | "main"
  | "second"
  | "third"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"; // F2 rename

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
  image?: string;
  linkDetail?: string;
}
