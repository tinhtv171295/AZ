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
  WrapLeft: styled.div`
    padding-left: 35px;
    width: 100%;
    text-align: center;

    @media (min-width: 992px) {
      padding-left: 0;
      width: auto;
    }
  `,
  WrapRight: styled.div`
    display: none;
    @media (min-width: 992px) {
      display: flex;
    }
  `,
  WrapLogo: styled.h1``,
  Logo: styled.h1`
    width: 100%;
  `,
  LogoLink: styled(NavLink)`
    display: block;
    font-size: 0;
  `,
  LogoImg: styled.img`
    width: 90px;
    @media (min-width: 768px) {
      width: 120px;
    }
  `,
  Hamburger: styled.a`
    width: 20px;
    height: 16px;
    position: absolute;
    left: 15px;
    top: 50%;
    cursor: pointer;
    display: block;
    z-index: 1;
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    transform: translate(0, -50%);
    span {
      background: #333;
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      opacity: 1;
      left: 0;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: 7px;
      }
      &:nth-child(3) {
        top: 7px;
      }
      &:nth-child(4) {
        top: 14px;
      }
    }

    &.menu_open {
      span {
        &:nth-child(1) {
          top: 18px;
          width: 0;
          left: 50%;
        }

        &:nth-child(2) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }

        &:nth-child(4) {
          top: 18px;
          width: 0;
          left: 50%;
        }
      }
    }
    @media (min-width: 992px) {
      display: none !important;
    }
  `,
};
