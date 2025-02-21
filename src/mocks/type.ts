export interface IBlock {
  title: string;
  titleBody?: string;
  linkDetail?: string;
  backgroundUrl?: string;
  content?: string;
  type: "main" | "second";
  dataContent?: IBlockContent[];
}

export interface IBlockContent {
  icon: string;
  title: string;
  description?: string;
  linkDetail?: string;
}
