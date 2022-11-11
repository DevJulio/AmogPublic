/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import * as Styled from "./styles";

import garota from "../../assets/img/garota.png";
import vote from "../../assets/icons/vote.png";

import Footer from "../../components/footer";
import { useHistory } from "react-router";
import { listGarota, getState } from "../../backend/controllers/garota";

const GarotaMain: React.FC = () => {
  const history = useHistory();
  // eslint-disable-next-line
  const [garotaState, setGarotaState] = useState(Array());
  const [list, setList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await listGarota();
      res && setGarotaState(res.map((doc) => doc));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getState();
      res && setList(res.habilitar);
    };
    fetchData();
  }, []);

  const images = [
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F1.jpeg?alt=media&token=94b78423-931b-41d1-89fa-b02d05b8ccee",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F1.jpeg?alt=media&token=94b78423-931b-41d1-89fa-b02d05b8ccee",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F10.jpeg?alt=media&token=e8fc09b5-1b35-40ea-aacf-b88bcba147c2",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F10.jpeg?alt=media&token=e8fc09b5-1b35-40ea-aacf-b88bcba147c2",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F11.jpeg?alt=media&token=3d3947d8-a5d2-4ac8-9c17-8ab713faa79f",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F11.jpeg?alt=media&token=3d3947d8-a5d2-4ac8-9c17-8ab713faa79f",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F12.jpeg?alt=media&token=946759fe-2e98-440d-bd35-891ca71a74d8",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F12.jpeg?alt=media&token=946759fe-2e98-440d-bd35-891ca71a74d8",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F13.jpeg?alt=media&token=a3858c26-ce45-451d-8bca-9a6a5f279d29",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F13.jpeg?alt=media&token=a3858c26-ce45-451d-8bca-9a6a5f279d29",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F14.jpeg?alt=media&token=efdbb0f7-2786-4a07-80e1-8b0b35cebe1a",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F14.jpeg?alt=media&token=efdbb0f7-2786-4a07-80e1-8b0b35cebe1a",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F19.jpeg?alt=media&token=dddeaf2e-ae16-45ae-90e0-eea00df56065",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F19.jpeg?alt=media&token=dddeaf2e-ae16-45ae-90e0-eea00df56065",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F2.jpeg?alt=media&token=7aaba8cb-2fe5-4210-9bf1-f13a0f8e0d8a",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F2.jpeg?alt=media&token=7aaba8cb-2fe5-4210-9bf1-f13a0f8e0d8a",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F20.jpeg?alt=media&token=69f6fd88-0741-45fc-a7b2-4e6ad93d53fc",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F20.jpeg?alt=media&token=69f6fd88-0741-45fc-a7b2-4e6ad93d53fc",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F21.jpeg?alt=media&token=b076b03b-6db9-4fe7-b4e7-a446349ad5ec",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F21.jpeg?alt=media&token=b076b03b-6db9-4fe7-b4e7-a446349ad5ec",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F22.jpeg?alt=media&token=51c846b4-acd8-4c4e-a65c-4407bfd2c89a",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F22.jpeg?alt=media&token=51c846b4-acd8-4c4e-a65c-4407bfd2c89a",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F23.jpeg?alt=media&token=e404646e-c30d-4206-956a-3d783e1c1c36",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F23.jpeg?alt=media&token=e404646e-c30d-4206-956a-3d783e1c1c36",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F24.jpeg?alt=media&token=a62d40fa-b2e2-4b8a-9770-69674ba48ff6",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F24.jpeg?alt=media&token=a62d40fa-b2e2-4b8a-9770-69674ba48ff6",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F3.jpeg?alt=media&token=e9915563-c0fd-4e45-8fc3-cede2c821904",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F3.jpeg?alt=media&token=e9915563-c0fd-4e45-8fc3-cede2c821904",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F5.jpeg?alt=media&token=b65b4565-4cc0-4d08-9059-bef123519bc3",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F5.jpeg?alt=media&token=b65b4565-4cc0-4d08-9059-bef123519bc3",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F6.jpeg?alt=media&token=0985c58f-c938-4e21-8449-303e7dd152c9",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F6.jpeg?alt=media&token=0985c58f-c938-4e21-8449-303e7dd152c9",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F7.jpeg?alt=media&token=791fff98-a482-4954-8ac4-00a2afb501f3",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F7.jpeg?alt=media&token=791fff98-a482-4954-8ac4-00a2afb501f3",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F8.jpeg?alt=media&token=852a26e7-725b-4a94-a75c-99e11962caae",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F8.jpeg?alt=media&token=852a26e7-725b-4a94-a75c-99e11962caae",
    },
    {
      original:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F9.jpeg?alt=media&token=c60b42b9-7761-4664-a467-5b11d7213f00",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/amog-2c673.appspot.com/o/garotaAmog%2F9.jpeg?alt=media&token=c60b42b9-7761-4664-a467-5b11d7213f00",
    },
  ];

  return (
    <>
      <Styled.MainContainer>
        <Styled.Icons
          onClick={() => {
            history.push("/");
          }}
          style={{ height: "400px", width: "auto" }}
          src={garota}
        />
      </Styled.MainContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={() => {
          history.push("/GarotaAmog");
        }}
      >
        <Styled.Title>Conheça a vencedora do concurso!</Styled.Title>
        {/* <Styled.Icons src={vote} /> */}
      </div>
      <ImageGallery items={images} />
      {/* 
      {list && (
        <Styled.Results>
          {garotaState.map((item, key) => (
            <>
              <Styled.ResultsList>
                {item.Nome}: {item.Vote}
              </Styled.ResultsList>
            </>
          ))}
        </Styled.Results>
      )} */}

      <Footer />
    </>
  );
};

export default GarotaMain;
