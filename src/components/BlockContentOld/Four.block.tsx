import styled from "styled-components";
import { ContainerStl } from "../../Styles/Container";
import { IBlock } from "../../mocks/type";

export default function BlockContentFour({
  title,
  content,
  backgroundUrl,
}: IBlock) {
  return (
    <Stl.Wrap>
      <ContainerStl>
        <Stl.Row>
          <Stl.Left>
            <Stl.Title>
              <Stl.TitleBody>{title}</Stl.TitleBody>
              <Stl.Image>
                <img src={backgroundUrl} alt={title} />
              </Stl.Image>
            </Stl.Title>
          </Stl.Left>
          <Stl.Right>
            {content && (
              <Stl.BodyContent
                dangerouslySetInnerHTML={{
                  __html: `${content}`,
                }}
              />
            )}
          </Stl.Right>
        </Stl.Row>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    padding: 60px 0;
  `,
  Row: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Left: styled.div`
    flex: 0 0 50%;
    max-width: calc(100% / 12 * 5);
  `,
  Right: styled.div`
    flex: 0 0 50%;
    width: calc(100% / 12 * 6);
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
  Image: styled.div`
    margin: 20px 0;
    img {
      width: 445px;
      height: 330px;
      border-radius: 10px;
    }
  `,
  BodyContent: styled.div`
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
  `,
};
