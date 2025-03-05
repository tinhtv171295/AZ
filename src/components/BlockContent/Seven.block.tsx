import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import { RowLayout } from "../../Styles/Row";
import TitleFour from "../Titles/Four.title";
import ContentView from "../ContentView";

export default function BlockSeven({
  type,
  dataContent,
  backgroundColor,
}: IBlock) {
  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <RowLayout col={1} md={3} lg={3}>
          {dataContent.map((item, i) => (
            <Stl.WrapItem key={i}>
              <Stl.WrapIcon>
                <Stl.Icon
                  dangerouslySetInnerHTML={{ __html: `${item.image}` }}
                />
              </Stl.WrapIcon>
              <TitleFour title={item.title} />
              <ContentView content={item.description} />
            </Stl.WrapItem>
          ))}
        </RowLayout>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string; $backgroundColor?: string }>`
    padding: 0 0 60px;
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
  WrapItem: styled.div`
    margin-bottom: 80px;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  `,
  WrapIcon: styled.div`
    text-align: center;
    margin-bottom: 35px;
  `,
  Icon: styled.span`
    background: #fff;
    display: flex;
    width: 128px;
    height: 128px;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 6px;
    border: dashed 1px var(--color-primary);
    margin: 0 auto;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-clip: padding-box;
    &::before {
      content: "";
      background: #f7f9ff;
      display: block;
      width: 90%;
      height: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-border-radius: 50%;
      border-radius: 50%;
      background-clip: padding-box;
    }
    svg {
      height: 70px;
      width: 60px;
      position: relative;
      z-index: 1;
    }
  `,
};
