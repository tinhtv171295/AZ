import BodyLayout from "../layouts/Body.layout";
import { useEffect, useState } from "react";
import { aboutData } from "../mocks/about.data";
import React from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { useParams } from "react-router-dom";
import { coreValueData } from "../mocks/corevalue.data";

export default function AboutPage() {
  const { slug } = useParams();
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    if (slug === "core-value") {
      setData(coreValueData);
      return;
    }
    setData(aboutData);
  }, [slug]);

  return (
    <BodyLayout>
      {/* <PageBanner
        title="Về chúng tôi"
        content="DLS là ai"
        image="https://dlsinc.com/storage/setting/1.O5HFQ5e81dd55a2fdc.jpg"
      /> */}
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
