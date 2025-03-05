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
import { DetailStl } from "../components/Recruitment/style";
import ContentView from "../components/ContentView";
import ApplySection from "../components/Recruitment/ApplySection";
import ApplyDetailForm from "../components/Recruitment/ApplyDetailForm";

export default function RecruitmentDetailPage() {
  const { slug } = useParams();

  // const [dataTop, setDataTop] = useState<IBlock[]>([]);
  const [bannerTop, setBannerTop] = useState<IBlock | undefined>(undefined);
  const [data, setData] = useState<IRecruitment | undefined>(undefined);
  const [dataBottom, setDataBottom] = useState<IBlock[]>([]);

  const refresh = () => {
    try {
      // setDataTop(recruitmentTopData);
      setBannerTop(
        recruitmentTopData.find(
          (x) =>
            x.type === "banner-fixed" ||
            x.type === "banner-no-margin" ||
            x.type === "banner-scroll"
        )
      );
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
      {data && (
        <>
          <DetailStl.Header
            id="header-job"
            $backgroundColor={bannerTop?.backgroundColor}
            $backgroundUrl={bannerTop?.backgroundUrl}
          >
            <ContainerStl>
              <DetailStl.WrapHeaderContent>
                <DetailStl.BackToHome>
                  <a href="#">Back to home</a>
                </DetailStl.BackToHome>
                <DetailStl.HeaderContent>
                  <div>
                    <DetailStl.JobTitle>{data.jobTitle}</DetailStl.JobTitle>
                    <DetailStl.HeaderArticle>
                      <p>
                        <a
                          className="blank"
                          href="https://recruitment.dlsinc.com/jobs?office=22"
                        >
                          Văn Phòng Hà Nội
                        </a>
                      </p>
                      <p>Untitled</p>
                      <p>Toàn thời gian</p>
                    </DetailStl.HeaderArticle>
                  </div>
                  <DetailStl.BoxShare>
                    <DetailStl.BoxTitle>Share this job</DetailStl.BoxTitle>
                    <DetailStl.BoxItem>
                      <a href="#">Facebook</a>
                      <a href="#">Google</a>
                      <a href="#">Google</a>
                      <a href="#">Google</a>
                    </DetailStl.BoxItem>
                  </DetailStl.BoxShare>
                </DetailStl.HeaderContent>
              </DetailStl.WrapHeaderContent>
            </ContainerStl>
          </DetailStl.Header>
          <ContainerStl>
            <DetailStl.WrapContent>
              <DetailStl.Content>
                <DetailStl.MainContent>
                  <ContentView
                    content={data.content}
                    align="justify"
                    el={"div"}
                  />
                </DetailStl.MainContent>
                <ApplyDetailForm />
              </DetailStl.Content>
              <DetailStl.SideBar>
                <DetailStl.ButtonApplyNow>
                  <a>Apply now</a>
                </DetailStl.ButtonApplyNow>
                <DetailStl.SlideBarGroup>
                  <DetailStl.SideBarItem>
                    <span>Salary:</span> {data.salary ?? "Thương lượng"}
                  </DetailStl.SideBarItem>
                  <DetailStl.SideBarItem>
                    <span>Location:</span>{" "}
                    <a href="https://recruitment.dlsinc.com/jobs?office=22">
                      Văn Phòng Hà Nội
                    </a>
                  </DetailStl.SideBarItem>
                  <DetailStl.SideBarItem>
                    <span>Application period: </span>19/02 — 21/03/2025
                  </DetailStl.SideBarItem>
                </DetailStl.SlideBarGroup>

                <DetailStl.ListRelated>
                  <DetailStl.SimilarJob>Similar jobs</DetailStl.SimilarJob>
                  <a href="https://recruitment.dlsinc.com/job/cong-tac-vien-booking-3281">
                    Cộng tác viên Booking
                  </a>{" "}
                  <a href="https://recruitment.dlsinc.com/home">
                    View all <span></span>
                  </a>
                </DetailStl.ListRelated>
              </DetailStl.SideBar>
            </DetailStl.WrapContent>
          </ContainerStl>
        </>
      )}

      <ApplySection />
      {dataBottom.map((block, i) => (
        <React.Fragment key={i}>{RenderLayout(block)}</React.Fragment>
      ))}
    </>
  );
}
