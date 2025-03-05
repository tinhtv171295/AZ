import React from "react";
import { useEffect, useState } from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import { recruitmentBottomData } from "../mocks/recruitment.data";
import ApplySection from "../components/Recruitment/ApplySection";
import FormApply from "../components/Recruitment/FormAppy";
import styled from "styled-components";

export default function ApplyCVPage() {
  const [dataBottom, setDataBottom] = useState<IBlock[]>([]);
  const refresh = () => {
    setDataBottom(recruitmentBottomData);
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      <FormApply />
      <ApplySection />
      <WrapContent>
        {dataBottom.map((block, i) => (
          <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>
        ))}
      </WrapContent>
    </>
  );
}

const WrapContent = styled.div`
  display: block;
  padding-top: 40px;
`;
