import Menus from "../../mocks/router.data";
import Menu from "../Menu";
import { HeaderStl } from "./style";

export default function Header() {
  return (
    <HeaderStl.Wrap>
      <HeaderStl.Inner>
        <HeaderStl.WrapLogo>
          <HeaderStl.Logo>
            <HeaderStl.LogoLink to="/">
              <HeaderStl.LogoImg
                src="https://dlsinc.com/resource/template/frontend/default2/image/logo.svg"
                alt="Dls logo"
              />
            </HeaderStl.LogoLink>
          </HeaderStl.Logo>
        </HeaderStl.WrapLogo>
        <Menu menus={Menus} />
      </HeaderStl.Inner>
    </HeaderStl.Wrap>
  );
}
