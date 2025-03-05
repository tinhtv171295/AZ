import styled from "styled-components";

export const BannerStl = {
  WrapTitle: styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
  `,
  ButtonTitle: styled.div`
    display: inline-block;
    padding: 0 30px;
    min-width: 150px;
    height: 40px;
    line-height: 40px;
    text-transform: uppercase;
    border: solid 1px #fff;
    margin-bottom: 5px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
    a {
      color: #fff;
    }
  `,
  TitleBody: styled.h2`
    font-size: 30px;
    margin: 0 0 10px;
    font-weight: 400;
    @media (min-width: 768px) {
      font-size: 40px;
      font-weight: 400;
    }
  `,
};

type Props = {
  title: string;
  titleBody?: string;
  linkDetail?: string;
};

export function BannerButtonTitle({ title, titleBody, linkDetail }: Props) {
  return (
    <BannerStl.WrapTitle>
      <BannerStl.ButtonTitle>
        <a href={linkDetail}>{title}</a>
      </BannerStl.ButtonTitle>
      {titleBody && <BannerStl.TitleBody>{titleBody}</BannerStl.TitleBody>}
    </BannerStl.WrapTitle>
  );
}
