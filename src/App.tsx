import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Main.layout";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import ActivitiesPage from "./pages/Activities.page";
import RecruitmentPage from "./pages/Recruitment.page";
import ContactPage from "./pages/Contact.page";
import ServicesPage from "./pages/Services.page";
import BannerPage from "./pages/Template/BannerPage";
import BlockContentPage from "./pages/Template/BlockContentPage";
import CauroselPage from "./pages/Template/Carousel.page";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="about/*">
            <Route index element={<AboutPage />} />
            <Route path=":slug" element={<AboutPage />} />
          </Route>

          <Route path="services/*">
            <Route index element={<ServicesPage />} />
            <Route path=":slug" element={<ServicesPage />} />
          </Route>

          <Route path="activities/*">
            <Route index element={<ActivitiesPage />} />
            <Route path=":slug" element={<ActivitiesPage />} />
          </Route>

          <Route path="recruitment/*">
            <Route index element={<RecruitmentPage />} />
            <Route path=":slug" element={<RecruitmentPage />} />
          </Route>

          <Route path="contact" element={<ContactPage />} />

          <Route path="templates/*">
            <Route path="banner" element={<BannerPage />} />
            <Route path="block" element={<BlockContentPage />} />
            <Route path="carousel" element={<CauroselPage />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
