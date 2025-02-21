import { useEffect, useState } from "react";
import BlockContent from "../components/BlockContent/Main.block";
import BlockContentSecond from "../components/BlockContent/Second.block";
import { IBlock } from "../mocks/type";
import { homeData } from "../mocks/page.data";
import React from "react";

export default function HomePage() {
  const [data, setData] = useState<IBlock[]>([]);
  const refresh = () => {
    setData(homeData);
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      {data.map((block, i) => (
        <React.Fragment key={i}>
          {block.type === "main" ? (
            <BlockContent
              title={block.title}
              titleBody={block.titleBody}
              content={block.content}
              backgroundUrl={block.backgroundUrl}
              linkDetail={block.linkDetail}
            />
          ) : (
            <BlockContentSecond
              title={block.title}
              titleBody={block.titleBody}
              content={block.content}
              backgroundUrl={block.backgroundUrl}
              linkDetail={block.linkDetail}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}
