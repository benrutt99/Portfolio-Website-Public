import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { useSpring, useTrail, useTransition } from "@react-spring/web";

import { skillsData } from "./CarouselData";

import { ItemContainer, ItemCard, ItemName } from "./SkillsCarousel.styles";

export default function SkillsCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: -1,
    autoplay: true,

    autoplaySpeed: 100,

    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    focusOnSelect: false,
    swipeToSlide: false,
    draggable: false,

    cssEase: "linear",
    speed: 8000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: -1,
          autoplay: true,
          autoplaySpeed: 4000,

          speed: 1500,
          cssEase: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: -1,
          autoplay: true,
          autoplaySpeed: 4000,

          speed: 1500,
          cssEase: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {skillsData.map((item, index) => (
        <ItemContainer key={index}>
          <ItemCard key={index}>
            <ItemName key={index}>{item}</ItemName>
          </ItemCard>
        </ItemContainer>
      ))}
    </Slider>
  );
}
