import styled from "styled-components";
import { ContainerStl } from "../../Styles/Container";

export default function SearchSection() {
  return (
    <Stl.Wrap id="searchJob">
      <ContainerStl>
        <Stl.BoxSearch>
          <Stl.FormSearch>
            <Stl.FormInput />
            <Stl.IconSearch>
              <span></span>
            </Stl.IconSearch>
          </Stl.FormSearch>
          <Stl.FormButton>
            <Stl.ButtonSearch>Search</Stl.ButtonSearch>
          </Stl.FormButton>
        </Stl.BoxSearch>
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
  `,
  BoxSearch: styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  `,
  FormSearch: styled.div`
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 80%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 1.78571%;
  `,
  FormInput: styled.input`
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 15px;
    background-color: white;
    border: 1px solid #e4e9ed;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    height: 45px;
  `,
  IconSearch: styled.div`
    position: absolute;
    text-align: center;
    top: 0px;
    font-size: 18px;
    right: 0px;
    width: 30px;
    line-height: 45px;
    z-index: 10;
    color: #637788;
  `,
  FormButton: styled.div`
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: 0;
    width: 15.17857%;
    text-align: left;
    display: inline-block;
    vertical-align: middle;
  `,
  ButtonSearch: styled.button`
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #2d8ffd;
    font-weight: bold;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer;
    height: 45px;
    line-height: 45px;
    border: 1px solid #2d8ffd;
    background-color: transparent;
  `,
};
