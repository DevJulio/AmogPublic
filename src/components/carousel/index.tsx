/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import car2 from "../../assets/img/car2.jpeg";
import car3 from "../../assets/img/car3.jpeg";
// import car4 from "../../assets/img/car4.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as Styled from "./styles";
import { useHistory } from "react-router";

function CarouselMain() {
  const history = useHistory();
  const redirect = (id: number) => {
    if (id === 0) {
      // history.push("/cadastro/comitivas");
      history.push("/Garota");
    }
    if (id === 1) {
      // history.push("/compras/ingressos");
      history.push("/construcao");
    }
    if (id === 2) {
    }
  };
  return (
    <Styled.MainContainer>
      <Carousel
        showArrows={true}
        onChange={() => {}}
        onClickItem={(id) => {
          redirect(id);
        }}
        onClickThumb={() => {}}
        showThumbs={false}
        interval={5000}
        autoPlay={true}
        infiniteLoop={true}
      >
        {/* <div>
          <img style={{ cursor: "pointer" }} src={car4} />
        </div> */}
        <div>
          <img style={{ cursor: "pointer" }} src={car2} />
        </div>
        <div>
          <img style={{ cursor: "pointer" }} src={car3} />
        </div>
      </Carousel>
    </Styled.MainContainer>
  );
}
export default CarouselMain;
