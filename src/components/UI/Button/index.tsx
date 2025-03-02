import { PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonAppearance = "light" | "dark";

type Props = PropsWithChildren & {
  href?: string;
  title?: string;
  appearance?: ButtonAppearance;
  transparent?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  title,
  appearance = "light",
  transparent,
  onClick,
}: Props) {
  return (
    <Stl.Button
      href={href}
      title={title}
      $appearance={appearance}
      $transparent={transparent}
      onClick={onClick}
    >
      {children}
    </Stl.Button>
  );
}

const Stl = {
  Button: styled.a<{ $appearance: ButtonAppearance; $transparent?: boolean }>`
    display: block !important;
    text-align: center;
    outline: none;
    padding: 0 10px;
    overflow: hidden;
    height: 40px;
    width: fit-content;
    color: ${({ $appearance }) => ($appearance === "dark" ? "#fff" : "#333")};
    background: ${({ $appearance }) =>
      $appearance === "light" ? "#fff" : "#333"};
    border: solid 1px transparent;
    border: solid 1px
      ${({ $appearance }) => ($appearance === "light" ? "#333" : "#fff")};
    text-decoration: none;
    line-height: 40px;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;

    ${({ $transparent }) =>
      $transparent === undefined
        ? ""
        : $transparent
        ? "background: transparent;"
        : ""}

    cursor: pointer;

    &:hover {
      background: ${({ $appearance }) =>
        $appearance === "light" ? "#333" : "#fff"};
      color: ${({ $appearance }) =>
        $appearance === "light" ? "#fff" : "#333"};

      ${({ $transparent }) =>
        $transparent === undefined
          ? ""
          : $transparent
          ? "background: transparent;"
          : ""}

      ${({ $transparent, $appearance }) =>
        $transparent === undefined
          ? ""
          : $transparent
          ? $appearance === "light"
            ? "color:#333;"
            : "color:#fff;"
          : ""}
    }
  `,
};
