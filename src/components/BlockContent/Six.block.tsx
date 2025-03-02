import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import TitleThird from "../Titles/Third.title";

export default function BlockSix({ type, title, backgroundColor }: IBlock) {
  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <TitleThird title={title} />
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string; $backgroundColor?: string }>`
    padding: 60px 0;
    ${({ $backgroundUrl, $backgroundColor }) =>
      $backgroundUrl !== undefined
        ? `
            background: url(${$backgroundUrl}) no-repeat 50% 50% fixed;
            background-size: cover;
            color: ${$backgroundColor ? $backgroundColor : "#fff"};
            min-height: 600px;
      `
        : `${$backgroundColor ? `background: ${$backgroundColor};` : ""}`}
  `,
  Row: styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  `,
  Left: styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 768px) {
      -ms-flex: 0 0 41.666667%;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }

    img {
      max-width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  `,
  Right: styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 768px) {
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }

    @media (min-width: 992px) {
      margin-left: 8.333333%;
    }
  `,
  Title: styled.h3`
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 0 20px;

    @media (min-width: 768px) {
      margin-bottom: 50px;
    }
  `,
  TitleBody: styled.span`
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
  Image: styled.div`
    margin: 20px 0;
  `,
  BodyContent: styled.div`
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
  `,
};
