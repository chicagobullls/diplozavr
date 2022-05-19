import { useState } from "react";
import arrowLogo from '../../../utiles/arrow.svg'
import "./Slider.css";

const slideArray = [
  {
    img: "https://sun9-35.userapi.com/s/v1/ig2/vyNksY-SBhxpmsHMa07T7mk_o_ssuoG8bvVyWSfYhCOItO3U3dtlcQv2_dtIDIgM4UN4Fy_I1nvp81bEgO5Rjcf6.jpg?size=1920x1080&quality=95&type=album",
    text: "",
    info: "25-27 МАРТА В НГУ СОСТОЯЛАСЬ XLIX СИБИРСКАЯ ГЕОЛОГИЧЕСКАЯ ОЛИМПИАДА ШКОЛЬНИКОВ"
  },
  {
    img: "https://www.nsu.ru/upload/iblock/515/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%BD%D0%B0%20%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80_%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%BE%D0%B5.jpg",
    text: "Cлайд 2",
    info: "читать далее..."
  },
  {
    img: "https://www.nsu.ru/upload/iblock/cca/NGU---stipendii-2500kh500.jpg",
    text: "Cлайд 3",
    info: "читать далее..."
  },
  {
    img: "https://www.nsu.ru/upload/iblock/c65/Frame%204%20%282%29.png",
    text: "Cлайд 4",
    info: "читать далее..."
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideNext = () => {
    currentSlide === 0
      ? setCurrentSlide(slideArray.length - 1)
      : setCurrentSlide((prevState) => prevState - 1);
  };

  const slideBack = () => {
    currentSlide === slideArray.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide((prevState) => prevState + 1);
  };
  return (
    <div className="slider">
      <div className="slide">
        <img className="slide__img" src={slideArray[currentSlide].img} />
        <img
          className="slide__arrowleft"
          src={arrowLogo}
          onClick={() => slideNext()}
        />
        <img
          className="slide__arrowright"
          src={arrowLogo}
          onClick={() => slideBack()}
        />
        <div className="slider_points">
          {slideArray.map((slidePoint, index) => (
            <div
              className={
                index === currentSlide
                  ? "slider__point--active"
                  : "slider__point"
              }
              key={index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="slide__infoblock">
          <div className="infoblock_title">{slideArray[currentSlide].text}</div>
          <div className="infoblock_info">{slideArray[currentSlide].info}</div>
          <div className="infoblock_btn">
            <button className="inf_btn">подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;