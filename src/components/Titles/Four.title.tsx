import { styled } from "styled-components";
import TitleType from "./type";

export default function TitleFour({ title }: TitleType) {
  return (
    <Stl.Wrap data-title="title-four">
      <Stl.Title>{title}</Stl.Title>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    position: relative;
    margin: 0 0 20px;
  `,
  Title: styled.h3`
    position: relative;
    margin: 0;
    padding: 0 0 0 10px;
    font-size: 20px;
    font-weight: 400;
    &::before {
      content: "";
      background: #428dff;
      display: block;
      width: 3px;
      position: absolute;
      left: 0;
      top: 0;
      max-height: 25px;
      height: 100%;
    }
  `,
};
