import { css, styled } from "styled-components";

export const DetailStl = {
  Header: styled.section<{
    $backgroundUrl?: string;
    $backgroundColor?: string;
  }>`
    background: rgba(17, 36, 52, 0.9);
    ${({ $backgroundUrl, $backgroundColor }) =>
      $backgroundUrl !== undefined
        ? `
            background: url(${$backgroundUrl}) no-repeat 50% 50% fixed;
            background-position: 50% 0%;
            background-repeat: no-repeat;
            background-attachment: scroll;
      `
        : `${$backgroundColor ? `background: ${$backgroundColor};` : ""}`}
    position: relative;
    clear: both;
    padding-top: 120px;
    padding-bottom: 60px;
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0s;
    -moz-transition-duration: 0s;
    -o-transition-duration: 0s;
    transition-duration: 0s;
    -webkit-transition-timing-function: ease;
    -moz-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    overflow: hidden;
    &::before {
      content: "";
      background: rgba(17, 36, 52, 0.9);
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
    * {
      color: #fff;
    }
  `,
  WrapHeaderContent: styled.div`
    position: relative;
    display: block;
    width: 100%;
  `,
  BackToHome: styled.div`
    margin-bottom: 20px;
  `,
  HeaderContent: styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    @media (min-width: 992px) {
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  `,
  JobTitle: styled.h1`
    font-size: 20px;
    margin-bottom: 0px;
  `,
  HeaderArticle: styled.div`
    color: #fff;
    margin-top: 20px;
    p {
      display: inline-block;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 13px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.5);
      a {
        color: #637788;
        font-weight: normal;
        -webkit-transition-property: all;
        -moz-transition-property: all;
        -o-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.3s;
        -moz-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease;
        -moz-transition-timing-function: ease;
        -o-transition-timing-function: ease;
        transition-timing-function: ease;
      }
      &::after {
        content: ".";
        color: rgba(255, 255, 255, 0.1);
        font-family: "ap";
        margin: 0px 10px;
      }
    }
  `,
  BoxShare: styled.div`
    position: relative;
    text-align: left;
    font-size: 16px;
    right: 0px;
    color: rgba(255, 255, 255, 0.5);

    @media (min-width: 992px) {
      position: absolute;
      top: -30px;
      text-align: center;
      width: 295px;
    }
  `,
  BoxTitle: styled.div`
    margin-bottom: 8px;
    margin-top: 20px;
  `,
  BoxItem: styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
    a {
      display: block;
      width: calc(100% / 2 - 4px);
      padding: 10px 0;
      color: #fff;
      text-align: center;
      font-size: 13px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.1);
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
    }
  `,
  WrapContent: styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: fit-content;
    @media (min-width: 992px) {
      flex-flow: row nowrap;
    }
  `,
  Content: styled.div`
    position: relative;
    width: 100%;
    padding: 40px 0px;
    background-color: white;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    @media (min-width: 992px) {
      float: left;
      padding-right: 30px;
      width: calc(100% - 330px);
    }
  `,
  MainContent: styled.div``,
  SideBar: styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 40px;
    width: 100%;
    margin-bottom: 40px;

    @media (min-width: 992px) {
      display: flex;
      flex-flow: column nowrap;
      gap: 40px;
      width: 300px;
      float: right;
      padding: 40px 0px;
    }
  `,
  SlideBarGroup: styled.div`
    display: flex;
    flex-flow: column nowrap;
  `,
  SideBarItem: styled.p`
    padding: 15px 0px;
    color: #4d5c69;
    font-size: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  `,
  ListRelated: styled.div`
    margin-top: 20px;
    border-top: 1px solid #e4e9ed;
    padding-top: 20px;
    a {
      display: block;
      color: #007abf;
      margin-top: 15px;
      line-height: 20px;
    }
  `,
  SimilarJob: styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  `,
  ButtonApplyNow: styled.div`
    display: none;
    a {
      display: block;
      width: 100%;
      background-color: #2d8ffd;
      line-height: 25px;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      clear: both;
      padding: 10px 40px;
    }

    @media (min-width: 992px) {
      display: block;
    }
  `,
};

const BaseInput = css`
  box-sizing: border-box;
  width: 100%;
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
`;

export const FormItemStl = {
  Wrap: styled.div`
    padding-bottom: 25px;
  `,
  Label: styled.div`
    color: #666;
    font-weight: bold;
    padding-bottom: 8px;
    span {
      color: #cc1111 !important;
      padding-left: 3px;
    }
  `,
  InputControl: styled.div``,
  Input: styled.input`
    ${BaseInput}
    padding: 11px 13px;
    border: 1px solid #ccc;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background-color: #fff;
    -moz-box-shadow: inset 1px 1px 1px #f8f8f8;
    -webkit-box-shadow: inset 1px 1px 1px #f8f8f8;
    box-shadow: inset 1px 1px 1px #f8f8f8;
  `,
  TextArea: styled.textarea`
    ${BaseInput}
    padding: 11px 13px;
    border: 1px solid #ccc;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background-color: #fff;
    -moz-box-shadow: inset 1px 1px 1px #f8f8f8;
    -webkit-box-shadow: inset 1px 1px 1px #f8f8f8;
    box-shadow: inset 1px 1px 1px #f8f8f8;
  `,
  UploadInput: styled.div`
    padding-bottom: 25px;
  `,
  WrapUpload: styled.div`
    position: relative;
    border: 2px dashed #ccc;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    margin-top: 10px;
    position: relative;
    text-align: center;
    font-size: 13px;
    z-index: 1 !important;
    padding: 20px 0;
    color: #637788;
  `,
  WrapMore: styled.div`
    font-size: 20px;
    font-weight: 300;
    color: #999;
    padding-top: 4px;
  `,
};
