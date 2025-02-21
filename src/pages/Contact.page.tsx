import PageBanner from "../components/Banners/PageBanner";
import BodyLayout from "../layouts/Body.layout";

export default function ContactPage() {
  return (
    <BodyLayout>
      <PageBanner
        title="Vị trí"
        content="Liên hệ chúng tôi"
        image={"https://dlsinc.com/storage/setting/1.7Q99Y5e81dd693d034.jpg"}
      />
    </BodyLayout>
  );
}
