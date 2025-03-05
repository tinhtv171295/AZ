import Menu from "../Menu";
import IMenu from "../Menu/type";
import { HeaderStl } from "./style";

type Props = {
  open: boolean;
  onOpen: () => void;
  menus: IMenu[];
};

export default function Header({ open, onOpen, menus }: Props) {
  return (
    <HeaderStl.Wrap>
      <HeaderStl.Inner>
        <HeaderStl.WrapLeft>
          <HeaderStl.WrapLogo>
            <HeaderStl.LogoLink to="/">
              <HeaderStl.LogoImg
                src="https://dlsinc.com/resource/template/frontend/default2/image/logo.svg"
                alt="Dls logo"
              />
            </HeaderStl.LogoLink>
          </HeaderStl.WrapLogo>
          <HeaderStl.Hamburger
            className={open ? "menu_open" : ""}
            onClick={onOpen}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </HeaderStl.Hamburger>
        </HeaderStl.WrapLeft>
        <HeaderStl.WrapRight>
          <Menu menus={menus} />
        </HeaderStl.WrapRight>
      </HeaderStl.Inner>
    </HeaderStl.Wrap>
  );
}
