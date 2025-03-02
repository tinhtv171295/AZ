import { useEffect, useState } from "react";
import { IBlock } from "../../mocks/type";
import blockData from "../../mocks/block.data";
import RenderLayout from "../../utils/RenderLayout";
import { TemplateStl } from "./style";

export default function BlockContentPage() {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(blockData);
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
