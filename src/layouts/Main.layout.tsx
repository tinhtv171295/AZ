import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function MainLayout() {
  return (
    <Stl.Wrap>
      <Header />
      <Outlet />
      <Footer />
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    display: block;
    width: 100%;
    height: auto;
  `,
};
