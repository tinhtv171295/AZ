import styled from "styled-components";
import { IBlock } from "../../mocks/type";
import CardImage from "../Card/CardImage";
import { ContainerStl } from "../../Styles/Container";

export default function BlockContentThird({ title, dataContent }: IBlock) {
  // f12 => to ref
  return (
    <Stl.Wrap>
      <ContainerStl>
        <Stl.Main>
          <Stl.Left>
            <Stl.Title>
              <Stl.TitleBody>{title}</Stl.TitleBody>
            </Stl.Title>
          </Stl.Left>
          <Stl.Cards>
            {dataContent &&
              dataContent.map((content, i) => (
                <CardImage
                  key={i}
                  title={content.title}
                  description={content.description}
                  image={content.image}
                />
              ))}
          </Stl.Cards>
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
  Cards: styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 15px;
  `,
  Left: styled.div`
    flex: 0 0 50%;
    max-width: calc(100% / 12 * 5);
  `,
  Title: styled.h3`
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 0 15px;
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
};
