import React from "react";
import Image from "next/image";
import styled from "styled-components";

const BannerBg = styled.div`
  height: 100vh;
  width: 70vw;
  background: url("/bg.png");
  position: relative;

  div {
    width: max-content;
    position: relative;
    top: 33%;
    left: 15%;
  }

  @media (max-width: 768px) {
    height: 40vh;
    width: 100vw;

    div {
      top: 25%;
      left: 22%;
    }

    img {
      width: 120px;
      height: 120px;
    }
  }
`;

export const Banner = () => (
  <BannerBg>
    <div>
      <Image
        width={202}
        height={202}
        src="/logo-rstcom-ok-.png"
        objectFit="cover"
      />
    </div>
  </BannerBg>
);
