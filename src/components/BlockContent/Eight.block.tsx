import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import { RowLayout } from "../../Styles/Row";
import ContentView from "../ContentView";

export default function BlockEight({
  type,
  title,
  dataContent,
  backgroundColor,
}: IBlock) {
  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <Stl.Title>
          <ContentView content={title} align="center" el={"p"} />
        </Stl.Title>
        <RowLayout
          col={1}
          md={2}
          lg={4}
          margin={[0, 0, 30, 0]}
          marginMd={[0, 0, 30, 0]}
        >
          {dataContent.map((item, i) => (
            <Stl.WrapItem key={i}>
              <Stl.WrapIcon>
                <Stl.Icon
                  dangerouslySetInnerHTML={{ __html: `${item.image}` }}
                />
                <div>
                  <Stl.ItemNumber>
                    <span>{item.description}</span>
                  </Stl.ItemNumber>
                </div>
                <Stl.ItemTitle>{item.title}</Stl.ItemTitle>
              </Stl.WrapIcon>
            </Stl.WrapItem>
          ))}
        </RowLayout>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string; $backgroundColor?: string }>`
    padding-top: 10px;
    padding-bottom: 50px;
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
  Title: styled.div`
    margin-bottom: 60px;
  `,

  WrapItem: styled.div`
    padding: 30px 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: 1px solid #f2f2f2;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;
  `,
  WrapIcon: styled.div`
    margin-bottom: 15px;
  `,
  Icon: styled.span`
    position: relative;
    background: #fff;
    display: flex;
    align-items: center;
    width: 128px;
    height: 128px;
    justify-content: center;
    padding: 6px;
    margin: 0 auto;
    margin-bottom: 15px;
    border: dashed 1px var(--color-primary);
    border-radius: 50%;
    background-clip: padding-box;
    -webkit-border-radius: 50%;
    overflow: hidden;
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
  ItemNumber: styled.strong`
    font-size: 40px;
    color: #428dff;
    span {
      font-size: 40px;
    }
  `,
  ItemTitle: styled.h4`
    font-size: 20px;
    margin: 0;
    font-weight: 400;
  `,
};
