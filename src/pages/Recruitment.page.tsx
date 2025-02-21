import PageBanner from "../components/Banners/PageBanner";
import BodyLayout from "../layouts/Body.layout";

export default function RecruitmentPage() {
  return (
    <BodyLayout>
      <PageBanner
        title="Tuyển dụng"
        image={"https://datax-talent.basecdn.net/dls/banner.jpg"}
      />
    </BodyLayout>
  );
}
