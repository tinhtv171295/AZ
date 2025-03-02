import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRecruitment from "../components/Recruitment/type";
import { recruitmentData } from "../mocks/recruitment.data";

export default function RecruitmentDetailPage() {
  const { slug } = useParams();

  const [data, setData] = useState<IRecruitment | undefined>(undefined);

  const refresh = () => {
    try {
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
    <div>
      {data && (
        <>
          <div>{data.jobTitle}</div>
        </>
      )}
    </div>
  );
}
