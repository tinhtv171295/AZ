import BodyLayout from "../layouts/Body.layout";
import { useEffect, useState } from "react";
import { aboutData } from "../mocks/about.data";
import React from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";

export default function AboutPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(aboutData);
  }, []);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
