import styled from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";

export default function BlockTwelve({ title }: IBlock) {
  return (
    <Stl.Wrap className="stick">
      <ContainerStl>
        <div>ahahahah</div>
        <input placeholder={title} />
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    padding-bottom: 40px;
    padding-top: 40px;
    text-align: center;
    -webkit-transition-property: padding;
    -moz-transition-property: padding;
    -o-transition-property: padding;
    transition-property: padding;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease;
    -moz-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    .stick {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      border-bottom: 1px solid #e4e9ed;
      padding: 15px 0px;
      background-color: white;
      z-index: 99;
    }
  `,
};
