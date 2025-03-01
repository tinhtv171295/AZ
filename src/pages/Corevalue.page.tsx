import PageBanner from "../components/Banners/PageBanner";
import BodyLayout from "../layouts/Body.layout";
import { useEffect, useState } from "react";
import { corevalueData, slides } from "../mocks/corevalue.data";
import React from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import Carousel from "../components/Carousel/Swiper";
import { ContainerStl } from "../Styles/Container";

export default function AboutPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(corevalueData);
  }, []);

  return (
    <BodyLayout>
      <PageBanner
        title="Về DLS"
        content="Giá trị cốt lỗi"
        image="https://dlsinc.com/storage/setting/1.O5HFQ5e81dd55a2fdc.jpg"
      />
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
      <ContainerStl>
        <Carousel slides={slides} />
      </ContainerStl>
    </BodyLayout>
  );
}
