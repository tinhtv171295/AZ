import { styled } from "styled-components";

export const TemplateStl = {
  Wrap: styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: auto;
  `,
  Block: styled.div`
    display: block;
    width: 100%;
    height: fit-content;
    border-bottom: 1px dashed #4079ff;
  `,
  Title: styled.div`
    display: block;
    background: #4079ff;
    padding: 3px;
    color: #fff;
  `,
  Content: styled.div`
    display: block;
    width: 100%;
    height: fit-content;
  `,
};
