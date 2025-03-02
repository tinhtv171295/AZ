import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import ContentView from "../ContentView";
import TitleFirst from "../Titles/First.title";
import Button from "../UI/Button";
import { RowLayout } from "../../Styles/Row";

export default function BlockFirst({
  type,
  title,
  titleBody,
  content,
  linkDetail,
}: IBlock) {
  return (
    <Stl.Wrap data-component={type}>
      <ContainerStl>
        <RowLayout col={1} md={2} lg={2}>
          <TitleFirst title={title} titleBody={titleBody} />
          <Stl.Right>
            <ContentView content={content} />
            <Button href={linkDetail}>Xem thêm</Button>
          </Stl.Right>
        </RowLayout>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string }>`
    padding: 60px 0;
  `,
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  Left: styled.div`
    flex: 0 0 50%;
    max-width: calc(100% / 12 * 5);
  `,
  Right: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    text-align: justify;
  `,
};
