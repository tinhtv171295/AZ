import styled from "styled-components";
import Button from "../UI/Button";
import { IBlock } from "../../mocks/type";

export default function FixedBanner({ title, content, backgroundUrl }: IBlock) {
  return (
    <Stl.Wrap $backgroundUrl={backgroundUrl}>
      <Stl.Content>
        <Stl.Button>
          <Button appearance="dark" href="#" transparent>
            {title}
          </Button>
        </Stl.Button>
        {content && <Stl.Content>{content}</Stl.Content>}
      </Stl.Content>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string }>`
    background: ${({ $backgroundUrl }) =>
      $backgroundUrl !== undefined ? `url(${$backgroundUrl})` : "#fff"};
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #fff;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 60px;

    &&::before {
      content: "";
      background: rgba(0, 0, 0, 0.65);
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  Button: styled.div`
    margin-bottom: 5px;
    a {
      margin: 0 auto;
      font-size: 14px;
    }
  `,
  Content: styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    margin: 0 0 10px;
  `,
};
