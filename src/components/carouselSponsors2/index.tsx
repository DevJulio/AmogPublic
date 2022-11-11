/* eslint-disable jsx-a11y/alt-text */
import React, { ReactChild } from "react";

import dtraco from "../../assets/img/sponsors/small/second/dtraco.jpeg";
import timbo from "../../assets/img/sponsors/small/second/timbo.png";
import VM from "../../assets/img/sponsors/small/second/VM.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as Styled from "./styles";
const CarouselSponsors2: React.FC = () => {
  //Amog, tv, boutique, VM;
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
          <img style={{ cursor: "pointer" }} src={dtraco} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={VM} />
        </div>
      </Carousel>
    </Styled.MainContainer>
  );
};
export default CarouselSponsors2;