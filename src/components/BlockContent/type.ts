import { JSX } from "react";

export type BlockContentType = {
  title: string;
  titleBody?: string;
  linkDetail?: string;
  content?: JSX.Element | string;
  backgroundUrl?: string;
};
