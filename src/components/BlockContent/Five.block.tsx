import styled from "styled-components";
<<<<<<< HEAD
import CardInfo from "../Card/CardInfo";
import { IBlock } from "../../mocks/type";
import TitleMain from "../Titles/Main.title";
import { ContainerStl } from "../../Styles/Container";

export default function BlockContentFive({
  title,
  titleBody,
  linkDetail,
  dataContent,
  backgroundColor,
}: IBlock) {
  return (
    <Stl.Wrap $bgColor={backgroundColor}>
      <ContainerStl>
        <TitleMain
          title={title}
          titleBody={titleBody}
          linkDetail={linkDetail}
        />

        <Stl.WrapCard>
          {dataContent.length > 0 &&
            dataContent.map((item, i) => <CardInfo key={i} data={item} />)}
        </Stl.WrapCard>
=======
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";

export default function BlockContentFive({ content }: IBlock) {
  // f12 => to ref
  return (
    <Stl.Wrap>
      <ContainerStl>
        <Stl.Main>
          <Stl.Content>
            {content && (
              <Stl.BodyContent
                dangerouslySetInnerHTML={{
                  __html: `${content}`,
                }}
              />
            )}
          </Stl.Content>
        </Stl.Main>
>>>>>>> feature/corevalue
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
<<<<<<< HEAD
  Wrap: styled.div<{ $bgColor?: string }>`
    padding: 60px 0;
    ${({ $bgColor }) =>
      $bgColor !== undefined ? `background-color:${$bgColor}` : ""}
  `,
  WrapCard: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: 30px;
  `,
=======
  Wrap: styled.div``,
  Main: styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    gap: 16px;
  `,
  Content: styled.div`
    text-align: center;
  `,
  BodyContent: styled.div``,
>>>>>>> feature/corevalue
};
