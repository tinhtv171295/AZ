import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRecruitment from "../components/Recruitment/type";
import {
  recruitmentBottomData,
  recruitmentData,
  recruitmentTopData,
} from "../mocks/recruitment.data";
import { IBlock } from "../mocks/type";
import React from "react";
import RenderLayout from "../utils/RenderLayout";
import { ContainerStl } from "../Styles/Container";
import styled from "styled-components";

export default function RecruitmentDetailPage() {
  const { slug } = useParams();

  const [dataTop, setDataTop] = useState<IBlock[]>([]);
  const [data, setData] = useState<IRecruitment | undefined>(undefined);
  const [dataBottom, setDataBottom] = useState<IBlock[]>([]);

  const refresh = () => {
    try {
      setDataTop(recruitmentTopData);
      setDataBottom(recruitmentBottomData);
      setData(recruitmentData.find((x) => `${x.id}` === slug));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      {dataTop.map((block, i) => (
        <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>
      ))}
      {data && (
        <>
          <Stl.Header id="header-job">
            <ContainerStl>
              <div>{data.jobTitle}</div>
            </ContainerStl>
          </Stl.Header>
          <ContainerStl>
            <Stl.Content>
              <Stl.MainContent
                dangerouslySetInnerHTML={{ __html: `${data.content}` }}
              />
            </Stl.Content>
            <Stl.SideBar>
              <div>{data.jobTitle}</div>
            </Stl.SideBar>
          </ContainerStl>
        </>
      )}
      {dataBottom.map((block, i) => (
        <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>
      ))}
    </>
  );
}

const Stl = {
  Header: styled.section`
    background: rgba(17, 36, 52, 0.9);
    position: relative;
    clear: both;
    padding-top: 120px;
    padding-bottom: 60px;
    padding: 40px 0;
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0s;
    -moz-transition-duration: 0s;
    -o-transition-duration: 0s;
    transition-duration: 0s;
    -webkit-transition-timing-function: ease;
    -moz-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    overflow: hidden;
    * {
      color: #fff;
    }
  `,
  Content: styled.div`
    background-color: white;
    padding: 40px 0px;
    width: calc(100% - 330px);
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    padding-right: 30px;
  `,
  SideBar: styled.div`
    width: 300px;
    float: right;
    padding: 40px 0px;
  `,
  MainContent: styled.div``,
};
