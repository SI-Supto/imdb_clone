"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCards from "./CarousleCards";
const CarouselItem = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="">
      <Carousel
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        responsive={responsive}
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
      >
        {data.map((movie, index) => (
          <CarouselCards key={movie.id} data={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
