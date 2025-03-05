import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function BodyLayout({ children }: PropsWithChildren) {
  return <Stl.Wrap>{children}</Stl.Wrap>;
}

const Stl = {
  Wrap: styled.div``,
};
