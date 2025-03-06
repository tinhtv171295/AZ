import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export type ButtonAppearance = "light" | "dark";

type Props = PropsWithChildren & {
  linkDetail?: string;
  title?: string;
  appearance?: ButtonAppearance;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  linkDetail,
  title,
  appearance = "light",
  icon,
  onClick,
}: Props) {
  return (
    <Stl.Button
      to={`${linkDetail}`}
      title={title}
      $appearance={appearance}
      onClick={onClick}
    >
      {children} <Stl.WrapIcon>{icon}</Stl.WrapIcon>
    </Stl.Button>
  );
}

const Stl = {
  Button: styled(NavLink)<{ $appearance: ButtonAppearance }>`
    display: inline-block;
    text-align: center;
    outline: none;
    padding: 0 10px;
    overflow: hidden;
    border: solid 1px transparent;
    cursor: pointer;
    color: ${({ $appearance }) => ($appearance === "light" ? "#333" : "#fff")};
    height: 40px;
    line-height: 40px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: ${({ $appearance }) =>
      $appearance === "light" ? "#fff" : "#333"};
    border: solid 1px
      ${({ $appearance }) => ($appearance === "light" ? "#333" : "#fff")};
    min-width: 150px;

    @media (min-width: 768px) {
      max-width: 220px;
      display: block;
      margin: 0;
    }

    &:hover {
      background: ${({ $appearance }) =>
        $appearance === "light" ? "#333" : "#fff"};
      color: ${({ $appearance }) =>
        $appearance === "light" ? "#fff" : "#333"};
    }
  `,
  WrapIcon: styled.span`
    vertical-align: -2px;
    width: 7px;
    position: relative;
    left: 17%;
  `,
};
