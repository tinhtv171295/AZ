import { useEffect, useState } from "react";
import { IBlock } from "../../mocks/type";
import RenderLayout from "../../utils/RenderLayout";
import bannerData from "../../mocks/banner.data";
import { TemplateStl } from "./style";

export default function BannerPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(bannerData);
  }, []);

  return (
    <TemplateStl.Wrap>
      {data.map((block, i) => (
        <TemplateStl.Block key={i}>
          <TemplateStl.Title>{block.type}</TemplateStl.Title>
          <TemplateStl.Content>{RenderLayout(block)}</TemplateStl.Content>
        </TemplateStl.Block>
      ))}
    </TemplateStl.Wrap>
  );
}
