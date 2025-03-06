import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import TitleSecond from "../Titles/Second.title";
import { RowLayout } from "../../Styles/Row";
import SeeMore from "../../Styles/SeeMore";

export default function BlockFour({
  type,
  title,
  titleBody,
  backgroundUrl,
  backgroundColor,
  dataContent,
  linkDetail,
}: IBlock) {
  return (
    <Stl.Wrap
      data-component={type}
      $backgroundUrl={backgroundUrl}
      $backgroundColor={backgroundColor}
    >
      <ContainerStl>
        <Stl.Title
          title={title}
          titleBody={titleBody}
          linkDetail={linkDetail}
        />
        <Stl.WrapItem>
          <RowLayout
            col={1}
            sm={1}
            md={2}
            lg={2}
            margin={[0, 0, 30, 0]}
            marginMd={[0, 0, 30, 0]}
          >
            {dataContent.map((item, i) => (
              <Stl.Item key={i}>
                <Stl.ItemThumb>
                  <a href={item.linkDetail}>
                    <img src={item.image} alt={item.title} />
                  </a>
                </Stl.ItemThumb>
                <Stl.ItemTitle>{item.title}</Stl.ItemTitle>
                <Stl.ItemSummary>{item.description}</Stl.ItemSummary>
                {item.linkDetail && <SeeMore url={item.linkDetail} />}
              </Stl.Item>
            ))}
          </RowLayout>
        </Stl.WrapItem>
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
  Title: styled(TitleSecond)`
    display: none;
  `,
  WrapItem: styled.div``,
  Item: styled.div`
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    min-height: 330px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;

    @media (min-width: 992px) {
      padding: 20px 60px;
    }
  `,
  ItemThumb: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 20px;
    a > img {
      max-width: 100%;
    }
  `,
  ItemTitle: styled.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: bold;
  `,
  ItemSummary: styled.p`
    margin: 0 0 25px;
    font-size: 14px;
    color: #828282;
    line-height: 18px;
  `,
};
