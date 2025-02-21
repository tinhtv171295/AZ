import PageBanner from "../components/Banners/PageBanner";
import BodyLayout from "../layouts/Body.layout";

export default function AboutPage() {
  return (
    <BodyLayout>
      <PageBanner
        title="Về chúng tôi"
        content="DLS là ai"
        image={"https://dlsinc.com/storage/setting/1.O5HFQ5e81dd55a2fdc.jpg"}
      />
    </BodyLayout>
  );
}
