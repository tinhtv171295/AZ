import styled from "styled-components";
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
