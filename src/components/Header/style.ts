import { styled } from "styled-components";
import { ContainerStl } from "../../Styles/Container";
import { NavLink } from "react-router-dom";

export const HeaderStl = {
  Wrap: styled.div`
    display: block;
    height: fit-content;
    width: 100%;
  `,
  Inner: styled(ContainerStl)`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  `,
  WrapLogo: styled.div`
    padding-left: 0;
    width: auto;
  `,
  Logo: styled.h1`
    width: 100%;
  `,
  LogoLink: styled(NavLink)`
    display: block;
    font-size: 0;
  `,
  LogoImg: styled.img`
    display: block;
    width: 90px;
    @media (min-width: 768px) {
      width: 120px;
    }
  `,
};
