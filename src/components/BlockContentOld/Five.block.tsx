import styled from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import Carousel from "../Carousels/Swiper";

export default function BlockContentFive({ title, dataContent }: IBlock) {
  // f12 => to ref
  return (
    <Stl.Wrap>
      <ContainerStl>
        <Stl.Main>
          <Stl.Content>
            <Stl.BodyContent
              dangerouslySetInnerHTML={{
                __html: `${title}`,
              }}
            />
          </Stl.Content>
        </Stl.Main>
        <Carousel slides={dataContent} />
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
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
};
