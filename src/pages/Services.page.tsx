import { useEffect, useState } from "react";
import BodyLayout from "../layouts/Body.layout";
import { serviceData } from "../mocks/service.data";
import React from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";

export default function ServicesPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(serviceData);
  }, []);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
