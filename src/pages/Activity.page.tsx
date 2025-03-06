import React from "react";
import { useEffect, useState } from "react";
import BodyLayout from "../layouts/Body.layout";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { activityData } from "../mocks/activities.data";

export default function ActivityPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(activityData);
  }, []);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
