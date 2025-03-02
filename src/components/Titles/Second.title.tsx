import { styled } from "styled-components";
import TitleType from "./type";
import Button from "../UI/Button";

export default function TitleSecond({
  title,
  titleBody,
  linkDetail,
}: TitleType) {
  return (
    <Stl.Wrap>
      <Stl.Title>
        <Stl.TitleContent>{title}</Stl.TitleContent>
      </Stl.Title>
      {titleBody && (
        <Stl.Content dangerouslySetInnerHTML={{ __html: `${titleBody}` }} />
      )}
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
      background: var(--color-primary);
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
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 25px;
    }

    @media (min-width: 992px) {
      font-size: 35px;
    }

    /* @media (min-width: 1200px) {
      font-size: 55px;
    } */
  `,
  ToDetail: styled.div`
    display: block;
    position: absolute;
    right: 0;
    top: 15px;
    min-width: 15px;
  `,
};
