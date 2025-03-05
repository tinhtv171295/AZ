import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import HeaderMobile from "../components/Header/HeaderMobile";
import { useState } from "react";
import Menus from "../mocks/router.data";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((pre) => !pre);

  return (
    <>
      <HeaderMobile open={open} menus={Menus} />
      <Stl.Wrap className={open ? "menu_opened" : ""}>
        <Header open={open} onOpen={toggle} menus={Menus} />
        <Outlet />
        <Footer />
      </Stl.Wrap>
    </>
  );
}

const Stl = {
  Wrap: styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    background: inherit;
    -webkit-transition: -webkit-transform 0.4s ease;
    transition: -webkit-transform 0.4s ease;
    -o-transition: transform 0.4s ease;
    transition: transform 0.4s ease;
    transition: transform 0.4s ease, -webkit-transform 0.4s ease;
    z-index: 1;
    &.menu_opened {
      -webkit-transform: translate3d(80vw, 0, 0);
      transform: translate3d(80vw, 0, 0);
      @media all and (min-width: 550px) {
        -webkit-transform: translate3d(440px, 0, 0);
        transform: translate3d(440px, 0, 0);
        height: 100vh;
        overflow: hidden;
      }
    }
  `,
};
