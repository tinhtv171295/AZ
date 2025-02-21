import styled from "styled-components";
import Button from "../UI/Button";
import { BlockContentType } from "./type";

export default function BlockHeader({
  title,
  titleBody,
  linkDetail,
}: BlockContentType) {
  return (
    <Stl.Wrap>
      <Stl.Title>
        <Stl.TitleContent>{title}</Stl.TitleContent>
      </Stl.Title>
      {titleBody && <Stl.Content>{titleBody}</Stl.Content>}
      {linkDetail && (
        <Stl.ToDetail>
          <Button>Xem thêm</Button>
        </Stl.ToDetail>
      )}
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    position: relative;

    @media (min-width: 768px) {
      padding: 15px 160px 15px 0;
    }
  `,
  Title: styled.h3`
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 0 15px;
  `,
  TitleContent: styled.span`
    display: inline-block;
    padding: 0 60px 0 0;
    position: relative;
    font-weight: 400;

    &&::after {
      content: "";
      background: #428dff;
      display: block;
      width: 50px;
      height: 3px;
      position: absolute;
      bottom: 5px;
      right: 0;
    }
  `,
  Content: styled.h3`
    font-size: 35px;
    margin: 0 0 25px;
  `,
  ToDetail: styled.div`
    display: block;
    position: absolute;
    right: 0;
    top: 15px;
    min-width: 15px;
  `,
};
