import { styled } from "styled-components";
import TitleType from "./type";

export default function TitleThird({ title }: TitleType) {
  return (
    <Stl.Wrap>
      <Stl.Title>{title}</Stl.Title>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    position: relative;
    display: block;
  `,
  Title: styled.span`
    display: inline-block;
    padding: 0 0 0 10px;
    position: relative;
    font-weight: 400;
    font-size: 33px;
    &&::after {
      content: "";
      background: var(--color-primary);
      display: block;
      width: 3px;
      height: 25px;
      position: absolute;
      left: 0;
      top: 0;
      max-height: 25px;
      height: 100%;
    }
  `,
};
