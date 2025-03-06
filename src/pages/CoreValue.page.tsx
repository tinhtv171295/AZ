import BodyLayout from "../layouts/Body.layout";
import { useEffect, useState } from "react";
import React from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { coreValueData } from "../mocks/coreValue.data";

export default function CoreValuePage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(coreValueData);
  }, []);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
