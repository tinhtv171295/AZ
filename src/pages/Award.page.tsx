import { useEffect, useState } from "react";
import BodyLayout from "../layouts/Body.layout";
import React from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { awardData } from "../mocks/award.data";

export default function AwardPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(awardData);
  }, []);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
