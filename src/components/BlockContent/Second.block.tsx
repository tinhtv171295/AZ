import styled from "styled-components";
import { ContainerStl } from "../../Styles/Container";
import { BlockContentType } from "./type";
import Button from "../UI/Button";

export default function BlockContentSecond({
  title,
  titleBody,
  linkDetail,
  content,
  backgroundUrl,
}: BlockContentType) {
  return (
    <Stl.Wrap $backgroundUrl={backgroundUrl}>
      <ContainerStl>
        <Stl.Row>
          <Stl.Left>
            <Stl.Title>
              <Stl.TitleBody>{title}</Stl.TitleBody>
            </Stl.Title>
            {titleBody && (
              <Stl.TitleContent
                dangerouslySetInnerHTML={{
                  __html: `${titleBody}`,
                }}
              />
            )}
          </Stl.Left>
          <Stl.Right>
            {content && (
              <Stl.BodyContent
                dangerouslySetInnerHTML={{
                  __html: `${content}`,
                }}
              />
            )}
            {linkDetail && <Button>Xem thêm</Button>}
          </Stl.Right>
        </Stl.Row>
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
    flex: 0 0 50%;
    width: calc(100% / 12 * 6);
    margin-left: 8.333333%;
  `,
  Title: styled.h3`
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 0 15px;
  `,
  TitleBody: styled.span`
    display: inline-block;
    padding: 0 60px 0 0;
    position: relative;
    font-weight: 400;

    &&::after {
      content: "";
      background: var(--color-primary);
      display: block;
      width: 50px;
      height: 3px;
      position: absolute;
      bottom: 5px;
      right: 0;
    }
  `,
  TitleContent: styled.h3`
    font-size: 55px;
  `,

  BodyContent: styled.div`
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
  `,
};
