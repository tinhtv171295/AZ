import styled from "styled-components";
import SeeMore from "../../Styles/SeeMore";

type Props = {
  icon: React.ReactNode;
  title: string;
  content?: string;
  linkDetail?: string;
};

export default function CardIcon({ icon, title, content, linkDetail }: Props) {
  return (
    <Stl.Wrap>
      <Stl.Thumb>{icon}</Stl.Thumb>
      <Stl.Title>{title}</Stl.Title>
      <Stl.Summary>{content}</Stl.Summary>
      <Stl.SeeMore>
        <SeeMore url={linkDetail} />
      </Stl.SeeMore>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
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
  Thumb: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 20px;
    span {
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
      svg {
        height: 70px;
        position: relative;
        z-index: 1;
      }
    }
  `,
  Title: styled.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  `,
  Summary: styled.p`
    margin: 0 0 25px;
    font-size: 14px;
    color: #828282;
    line-height: 18px;
    text-align: center;
  `,
  SeeMore: styled.div`
    display: block;
    text-align: center;
  `,
};
