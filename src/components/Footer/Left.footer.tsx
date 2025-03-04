import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { HeaderStl } from "../Header/style";

export default function FooterLeft({ type, dataContent }: IBlock) {
  return (
    <Stl.Body data-footer={type}>
      <Stl.Logo>
        <HeaderStl.Wrap>
          <Stl.Inner>
            <HeaderStl.WrapLogo>
              <HeaderStl.Logo>
                <HeaderStl.LogoLink to="/">
                  <HeaderStl.LogoImg
                    src="https://dlsinc.com/resource/template/frontend/default2/image/logo-footer.svg"
                    alt="Dls logo"
                  />
                </HeaderStl.LogoLink>
              </HeaderStl.Logo>
            </HeaderStl.WrapLogo>
          </Stl.Inner>
        </HeaderStl.Wrap>
      </Stl.Logo>
      <Stl.Content>
        {dataContent.map((item, i) => (
          <Stl.ContentItem key={i}>
            <Stl.Title>
              <span>{item.title}</span>
            </Stl.Title>
            <Stl.Des>{item.description}</Stl.Des>
          </Stl.ContentItem>
        ))}
      </Stl.Content>
    </Stl.Body>
  );
}

const Stl = {
  Body: styled.div`
    margin-bottom: 20px;
    @media (max-width: 768px) {
      margin-bottom: 0;
    }
  `,
  Logo: styled.div`
    margin: 0 0 15px;
  `,
  Inner: styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
      justify-content: center;
    }
  `,
  Content: styled.div``,
  ContentItem: styled.div`
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    line-height: 20px;
  `,
  Title: styled.div``,
  Des: styled.div``,
};
