import { PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonAppearance = "light" | "dark";

type Props = PropsWithChildren & {
  appearance?: ButtonAppearance;
  onClick?: () => void;
};

export default function Button({
  children,
  appearance = "light",
  onClick,
}: Props) {
  return (
    <Stl.Button $appearance={appearance} onClick={onClick}>
      {children}
    </Stl.Button>
  );
}

const Stl = {
  Button: styled.button<{ $appearance: ButtonAppearance }>`
    display: block !important;
    margin: 0 auto;
    max-width: 150px;
    text-align: center;
    outline: none;
    padding: 0 10px;
    overflow: hidden;
    height: 40px;
    color: ${({ $appearance }) => ($appearance === "dark" ? "#fff" : "#333")};
    background: ${({ $appearance }) =>
      $appearance === "light" ? "#fff" : "#333"};
    border: solid 1px transparent;
    border: solid 1px
      ${({ $appearance }) => ($appearance === "light" ? "#333" : "#fff")};
    line-height: 40px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;

    cursor: pointer;

    &:hover {
      background: ${({ $appearance }) =>
        $appearance === "light" ? "#333" : "#fff"};
      color: ${({ $appearance }) =>
        $appearance === "light" ? "#fff" : "#333"};
    }
  `,
};
