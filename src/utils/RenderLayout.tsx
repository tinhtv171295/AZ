import React from "react";
import BlockContent from "../components/BlockContent/Main.block";
import BlockContentSecond from "../components/BlockContent/Second.block";
import BlockContentThird from "../components/BlockContent/Third.block";
import { IBlock } from "../mocks/type";
import BlockContentFour from "../components/BlockContent/Four.block";

export default function RenderLayout(block: IBlock) {
  switch (block.type) {
    case "main":
      return (
        <BlockContent
          title={block.title}
          backgroundUrl={block.backgroundUrl}
          titleBody={block.titleBody}
          content={block.content}
        />
      );
    case "second":
      return (
        <BlockContentSecond
          title={block.title}
          backgroundUrl={block.backgroundUrl}
          titleBody={block.titleBody}
          content={block.content}
        />
      );
    case "third":
      return (
        <BlockContentThird
          {...block}
          titleBody={block.titleBody}
          dataContent={block.dataContent}
        />
      );
    case "four":
      return (
        // cmd + .
        <BlockContentFour
          // cmd + i
          title={block.title}
          backgroundUrl={block.backgroundUrl}
          content={block.content}
        />
      );
    default:
      return <React.Fragment>aaa</React.Fragment>;
  }
}
