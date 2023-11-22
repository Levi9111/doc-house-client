import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carousel({ children }) {
  return (
    <ReactCarousel
      arrows
      centerMode={false}
      containerClass="container"
      dotListClass=""
      focusOnSelect={false}
      infinite={false}
      keyBoardControl
      minimumTouchDrag={80}
      renderArrowsWhenDisabled
      renderButtonGroupOutside
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 2,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {children}
    </ReactCarousel>
  );
}

export default Carousel;
