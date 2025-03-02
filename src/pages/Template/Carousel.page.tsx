import { useEffect, useState } from "react";
import { IBlock } from "../../mocks/type";
import RenderLayout from "../../utils/RenderLayout";
import { TemplateStl } from "./style";
import { carouselData } from "../../mocks/carousel.data";

export default function CarouselPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(carouselData);
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
