import React from "react";
import { useEffect, useState } from "react";
import BodyLayout from "../layouts/Body.layout";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { activitiesData } from "../mocks/activities.data";

export default function ActivitiesPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(activitiesData);
  }, []);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
