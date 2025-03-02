import BodyLayout from "../layouts/Body.layout";
import { useEffect, useState } from "react";
import React from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { useParams } from "react-router-dom";
import { contactData } from "../mocks/contact.data";

export default function ContactPage() {
  const { slug } = useParams();
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    setData(contactData);
  }, [slug]);

  return (
    <BodyLayout>
      {data.map((block, i) => {
        return <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>;
      })}
    </BodyLayout>
  );
}
