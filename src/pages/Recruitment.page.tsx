import React from "react";
import { useEffect, useState } from "react";
import { IBlock } from "../mocks/type";
import RenderLayout from "../utils/RenderLayout";
import {
  recruitmentBottomData,
  recruitmentData,
  recruitmentTopData,
} from "../mocks/recruitment.data";
import { ContainerStl } from "../Styles/Container";
import Departments from "../components/Department/Departments";
import IDepartment, { departmentsData } from "../components/Department/type";
import TitleThird from "../components/Titles/Third.title";
import styled from "styled-components";
import IRecruitment from "../components/Recruitment/type";
import Jobs from "../components/Recruitment/Jobs";
import SearchSection from "../components/Recruitment/SearchSection";
import ApplySection from "../components/Recruitment/ApplySection";

export default function RecruitmentPage() {
  const [dataTop, setDataTop] = useState<IBlock[]>([]);
  const [dataBottom, setDataBottom] = useState<IBlock[]>([]);
  const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [jobs, setJobs] = useState<IRecruitment[]>([]);
  const refresh = () => {
    setDataTop(recruitmentTopData);
    setDataBottom(recruitmentBottomData);
    setDepartments(departmentsData);
    setJobs(recruitmentData);
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <>
      {dataTop.map((block, i) => (
        <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>
      ))}

      <SearchSection />

      <section id="allJobs">
        <ContainerStl>
          <Stl.WrapTitle>
            <TitleThird title="Recruitment List" />
          </Stl.WrapTitle>
          <Stl.WrapList>
            <Stl.WrapDepartment>
              <Departments data={departments} />
            </Stl.WrapDepartment>
            <Stl.WrapJobs>
              <Jobs data={jobs} />
            </Stl.WrapJobs>
          </Stl.WrapList>
        </ContainerStl>
      </section>

      <ApplySection />

      {dataBottom.map((block, i) => (
        <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>
      ))}
    </>
  );
}

const Stl = {
  WrapTitle: styled.div`
    color: #333;
    position: relative;
    font-size: 35px;
    font-weight: 400;
    padding: 0 0 0 10px;
    margin-bottom: 30px;
  `,
  WrapList: styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  `,
  WrapDepartment: styled.div`
    flex: 0 0 25%;
    padding: 0px 15px;
  `,
  WrapJobs: styled.div`
    flex: 0 0 75%;
    padding: 0px 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  `,
};
