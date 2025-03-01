import React from "react";
import BlockContent from "../components/BlockContent/Main.block";
import BlockContentSecond from "../components/BlockContent/Second.block";
import BlockContentThird from "../components/BlockContent/Third.block";
import { IBlock } from "../mocks/type";
import BlockContentFour from "../components/BlockContent/Four.block";
import BlockContentFive from "../components/BlockContent/Five.block";
import BlockContentSix from "../components/BlockContent/Six.block";
import BlockContentSeven from "../components/BlockContent/Seven.block";
import PageBanner from "../components/Banners/PageBanner";
import BlockContentEight from "../components/BlockContent/Eight.block";

export default function RenderLayout(block: IBlock) {
  switch (block.type) {
    case "banner":
      return (
        <PageBanner
          title={block.title}
          content={block.titleBody}
          image={block.backgroundUrl ?? ""}
        />
      );
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
    case "five":
      return <BlockContentFive {...block} content={block.content} />;

    case "six":
      return <BlockContentSix {...block} />;
    case "seven":
      return <BlockContentSeven {...block} />;
    case "eight":
      return <BlockContentEight {...block} />;
    default:
      return <React.Fragment>aaa</React.Fragment>;
  }
}
