/* eslint-disable jsx-a11y/alt-text */
import React, { ReactChild } from "react";

import car2 from "../../assets/img/car2.jpeg";
import car3 from "../../assets/img/car3.jpeg";
import amog from "../../assets/img/sponsors/small/first/AMOG.png";
import AMOG_BOUTIQUE from "../../assets/img/sponsors/small/first/AMOG_BOUTIQUE.png";
import queima from "../../assets/img/sponsors/small/first/queima.png";
import tvamog from "../../assets/img/sponsors/small/first/tvamog.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as Styled from "./styles";
const CarouselSponsors: React.FC = () => {
  //Amog, tv, boutique, queima;
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
          <img style={{ cursor: "pointer" }} src={amog} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={AMOG_BOUTIQUE} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={queima} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={tvamog} />
        </div>
      </Carousel>
    </Styled.MainContainer>
  );
};
export default CarouselSponsors;
