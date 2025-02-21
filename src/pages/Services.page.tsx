import PageBanner from "../components/Banners/PageBanner";
import BodyLayout from "../layouts/Body.layout";

export default function ServicesPage() {
  return (
    <BodyLayout>
      <PageBanner
        title="DLS làm gì?"
        content="Sản phẩm"
        image={"https://dlsinc.com/storage/setting/1.0365N5e81dd590a055.jpg"}
      />
    </BodyLayout>
  );
}
