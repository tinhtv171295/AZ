import { useEffect, useState } from "react";
import { IBlock } from "../mocks/type";
import { homeData } from "../mocks/home.data";
import React from "react";
import RenderLayout from "../utils/RenderLayout";

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
        <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>
      ))}
    </>
  );
}
