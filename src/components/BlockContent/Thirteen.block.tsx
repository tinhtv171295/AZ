import LightGalleryComponent from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import styled from "styled-components";

export default function BlockThirTeen({
  title,
  titleBody,
  dataContent,
}: IBlock) {
  return (
    <Stl.Wrap>
      <ContainerStl>
        <Stl.Header>
          <Stl.Title>{title}</Stl.Title>
          {titleBody && <Stl.TitleBody>{titleBody}</Stl.TitleBody>}
          <Stl.AlbumCount>
            <span>{dataContent.length} photos</span> &nbsp; | &nbsp;{" "}
            <span></span>
          </Stl.AlbumCount>
        </Stl.Header>
        <Stl.WrapAlbum>
          <LightGalleryComponent
            actualSize={true}
            elementClassNames="media_viewer"
            alignThumbnails="middle"
            plugins={[lgZoom, lgVideo]}
          >
            {dataContent.map((item, i) => (
              <Stl.Item
                key={i}
                data-lg-size="1406-1390"
                className="gallery-item"
                data-src={item.image}
              >
                <img className="img-responsive" src={item.image} />
              </Stl.Item>
            ))}
          </LightGalleryComponent>
        </Stl.WrapAlbum>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    display: block;
    margin-bottom: 50px;
  `,
  Header: styled.div`
    text-align: center;
    margin: 0 0 30px;
  `,
  Title: styled.h2`
    display: block;
    margin: 0 0 15px;
    font-size: 30px;
    font-weight: 600;
  `,
  TitleBody: styled.div`
    margin: 0 0 15px;
  `,
  AlbumCount: styled.div`
    color: #828282;
    font-size: 14px;
  `,
  WrapAlbum: styled.div`
    display: block;
    .media_viewer {
      display: flex;
      flex-flow: row wrap;
      gap: 30px;
    }
  `,
  Item: styled.a`
    display: block;
    font-size: 0;
    position: relative;
    height: 150px;
    width: calc(25% - 23px);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;
    overflow: hidden;
  `,
};
