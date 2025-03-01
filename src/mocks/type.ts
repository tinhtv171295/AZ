export type BlockType = "main" | "second" | "third" | "four" | "five" | "six"; // F2 rename

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
