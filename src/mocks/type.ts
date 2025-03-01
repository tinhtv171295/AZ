export type BlockType = "main" | "second" | "third" | "four" | "five"; // F2 rename

export interface IBlock {
  title: string;
  titleBody?: string;
  linkDetail?: string;
  backgroundUrl?: string;
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
