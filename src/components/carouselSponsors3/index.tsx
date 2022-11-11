/* eslint-disable jsx-a11y/alt-text */
import React, { ReactChild } from "react";

import casio from "../../assets/img/sponsors/small/third/casio.png";
import davi from "../../assets/img/sponsors/small/third/davi.png";
import droga from "../../assets/img/sponsors/small/third/droga.png";
import LEL from "../../assets/img/sponsors/small/third/LEL.png";
import posto from "../../assets/img/sponsors/small/third/posto.png";
import rodo from "../../assets/img/sponsors/small/third/rodo.png";
import top from "../../assets/img/sponsors/small/third/top.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as Styled from "./styles";

const CarouselSponsors3: React.FC = () => {
  return (
    <Styled.MainContainer>
      <Carousel
        showArrows={true}
        onChange={() => { }}
        onClickThumb={() => { }}
        showThumbs={false}
        interval={5000}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img style={{ cursor: "pointer" }} src={casio} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={davi} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={droga} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={LEL} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={posto} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={rodo} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={top} />
        </div>

      </Carousel>
    </Styled.MainContainer>
  );
};
export default CarouselSponsors3;