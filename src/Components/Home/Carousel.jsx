import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Oct/15/Photo_h180_w240/69539739_2_PropertyImage239-96832342991704_180_240.jpg"
          alt=""
          className="sliderImg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/new-projects.webp"
          alt=""
          className="sliderImg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Oct/15/Photo_h180_w240/69539739_2_PropertyImage239-96832342991704_180_240.jpg"
          alt=""
          className="sliderImg"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
