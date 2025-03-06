import React from "react";
import { useEffect, useState } from "react";
import BodyLayout from "../layouts/Body.layout";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { albumData } from "../mocks/activities.data";

export default function AlbumPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(albumData);
  }, []);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
