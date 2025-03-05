import styled from "styled-components";
import IMenu from "../Menu/type";
import { useState } from "react";

type Props = {
  open: boolean;
  menus: IMenu[];
};
export default function HeaderMobile({ open, menus }: Props) {
  const [openMenu, setOpenMenu] = useState<number | undefined>(undefined);
  const toggleMenu = (id: number) => {
    if (openMenu === id) {
      setOpenMenu(undefined);
      return;
    }
    setOpenMenu(id);
  };
  return (
    <Stl.Wrap className={open ? "opened" : ""} style={{ display: "none" }}>
      <Stl.Panels>
        <Stl.Label>
          <a href="#">Menu</a>
        </Stl.Label>
        <Stl.WrapMenu>
          <Stl.Menu $open={true}>
            {menus.map((menu, i) => (
              <Stl.Item key={i}>
                <Stl.ItemLabel>
                  <Stl.Link>{menu.name}</Stl.Link>
                  {menu.menu && (
                    <Stl.ButtonArrow
                      $open={openMenu === i}
                      onClick={() => toggleMenu(i)}
                    />
                  )}
                </Stl.ItemLabel>
                {menu.menu && (
                  <Stl.Menu $open={openMenu === i}>
                    {menu.menu.map((item, id) => (
                      <Stl.Item key={id}>
                        <Stl.LinkSub>{item.name}</Stl.LinkSub>
                      </Stl.Item>
                    ))}
                  </Stl.Menu>
                )}
              </Stl.Item>
            ))}
          </Stl.Menu>
        </Stl.WrapMenu>
      </Stl.Panels>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    background: #f9f9f9;
    border-color: #edeff3;
    color: #333333;
    line-height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: fixed;
    right: auto;
    z-index: 0;
    width: 80%;
    min-width: 240px;
    max-width: 440px;

    &.opened {
      display: block !important;
      border-right: 1px solid #edeff3;
    }
    @media (min-width: 992px) {
      display: none !important;
    }
  `,
  Panels: styled.div`
    background: #f9f9f9;
    border-color: #edeff3;
    color: #333333;
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
  `,
  Overlay: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  `,
  Label: styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    background: #f9f9f9;
    border-color: #edeff3;
    color: #333333;
    text-align: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    opacity: 1;
    -webkit-transition: opacity 0.4s ease;
    -o-transition: opacity 0.4s ease;
    transition: opacity 0.4s ease;
  `,
  WrapMenu: styled.div`
    display: block;
    width: 100%;
    height: auto;
    -webkit-transition: -webkit-transform 0.4s ease;
    transition: -webkit-transform 0.4s ease;
    -o-transition: transform 0.4s ease;
    transition: transform 0.4s ease;
    transition: transform 0.4s ease, -webkit-transform 0.4s ease;
  `,
  Menu: styled.ul<{ $open: boolean }>`
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    ${({ $open }) =>
      $open
        ? ""
        : `
        height: 0;
        display: none;
        `}
  `,
  Item: styled.li`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    color: #333333;
    border-color: #edeff3;
    list-style: none;
    -webkit-transition: -webkit-transform 0.4s ease;
    transition: -webkit-transform 0.4s ease;
    -o-transition: transform 0.4s ease;
    transition: transform 0.4s ease;
    transition: transform 0.4s ease, -webkit-transform 0.4s ease;
    &::after {
      content: "";
      border-color: inherit;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      display: block;
      position: absolute;
      left: 20px;
      right: 0;
      bottom: 0;
    }
  `,
  ItemLabel: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Link: styled.a`
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 10px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    text-decoration: none;
    display: inline-block;
    padding: 10px 25px;
    width: 100%;
    cursor: pointer;
    &.active,
    &:hover {
      color: #428dff;
    }
  `,
  LinkSub: styled.a`
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 10px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 10%;
    flex-basis: 10%;
    text-decoration: none;
    display: inline-block;
    padding: 10px 35px;
    width: 100%;
    cursor: pointer;
    &.active,
    &:hover {
      color: #428dff;
    }
  `,
  ButtonArrow: styled.button<{ $open: boolean }>`
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    transform: rotate(0);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    ${({ $open }) => ($open ? "transform: rotate(90deg);" : "")}

    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      left: 50%;
      top: 16px;
      background: #636363;
      transform: translate(-50%) rotate(45deg);
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      left: 50%;
      bottom: 16px;
      background: #636363;
      transform: translate(-50%) rotate(-45deg);
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
  `,
};
