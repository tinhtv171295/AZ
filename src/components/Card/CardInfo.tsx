import styled from "styled-components";
import { IBlockContent } from "../../mocks/type";
import SeeMore from "../../Styles/SeeMore";

type Props = {
  data: IBlockContent;
};

export default function CardInfo({ data }: Props) {
  return (
    <Stl.Wrap>
      <Stl.WrapIcon>
        <Stl.IconRound>
          <Stl.Icon
            dangerouslySetInnerHTML={{
              __html: `${data.image}`,
            }}
          />
        </Stl.IconRound>
      </Stl.WrapIcon>
      <Stl.Title>{data.title}</Stl.Title>
      <Stl.Description>{data.description}</Stl.Description>
      {data.linkDetail && (
        <Stl.SeeMore>
          <SeeMore url={data.linkDetail} />
        </Stl.SeeMore>
      )}
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0 0 20px;
    padding: 20px;
    background: #fff;
    min-height: 330px;
    border-radius: 10px;
    background-clip: padding-box;
    -webkit-border-radius: 10px;
    @media (min-width: 992px) {
      padding: 20px 60px;
    }
  `,
  WrapIcon: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 20px;
  `,
  IconRound: styled.span`
    background: #fff;
    display: flex;
    width: 128px;
    height: 128px;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 6px;
    border: dashed 1px var(--color-primary);
    margin: 0 auto;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-clip: padding-box;
    &::before {
      content: "";
      background: #f7f9ff;
      display: block;
      width: 90%;
      height: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-border-radius: 50%;
      border-radius: 50%;
      background-clip: padding-box;
    }
  `,
  Icon: styled.a`
    svg {
      height: 70px;
      position: relative;
      z-index: 1;
    }
  `,
  Title: styled.h3`
    margin: 0 0 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  `,
  Description: styled.p`
    margin: 0 0 25px;
    text-align: center;
    font-size: 14px;
    color: #828282;
    line-height: 18px;
  `,
  SeeMore: styled.div`
    text-align: center;
    a {
      color: var(--color-primary);
      text-decoration: none;
    }
  `,
};
