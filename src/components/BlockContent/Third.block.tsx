import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import TitleSecond from "../Titles/Second.title";
import { RowLayout } from "../../Styles/Row";

export default function BlockThird({
  type,
  title,
  titleBody,
  backgroundUrl,
  dataContent,
  linkDetail,
}: IBlock) {
  return (
    <Stl.Wrap data-component={type} $backgroundUrl={backgroundUrl}>
      <ContainerStl>
        <TitleSecond
          title={title}
          titleBody={titleBody}
          linkDetail={linkDetail}
        />
        <Stl.WrapItem>
          <RowLayout
            col={1}
            sm={1}
            md={2}
            lg={4}
            margin={[0, 0, 30, 0]}
            marginMd={[0, 0, 30, 0]}
          >
            {dataContent.map((item, i) => (
              <Stl.Item key={i}>
                <Stl.NumberCount>{item.description}</Stl.NumberCount>
                <Stl.ItemTitle>{item.title}</Stl.ItemTitle>
              </Stl.Item>
            ))}
          </RowLayout>
        </Stl.WrapItem>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string }>`
    padding: 60px 0;
    ${({ $backgroundUrl }) =>
      $backgroundUrl !== undefined
        ? `
            background: url(${$backgroundUrl}) no-repeat 50% 50% fixed;
            background-size: cover;
            color: #fff;
            min-height: 600px;
      `
        : ""}
  `,
  WrapItem: styled.div`
    @media (min-width: 992px) {
      padding: 100px 0 0;
    }
  `,
  Item: styled.div`
    border: solid 1px #fff;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;
  `,
  NumberCount: styled.strong`
    color: #428dff;
    font-size: 40px;
  `,
  ItemTitle: styled.h5`
    font-size: 16px;
    margin: 0;
    font-weight: 400;
  `,
};
