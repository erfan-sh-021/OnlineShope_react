import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3><img src="https://images-na.ssl-images-amazon.com/images/I/61UUq%2BRQTXL._AC_SX466_.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://m.media-amazon.com/images/I/81ef5sbZznL._AC_SY450_.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://images-na.ssl-images-amazon.com/images/I/61UUq%2BRQTXL._AC_SX466_.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img src="https://images-na.ssl-images-amazon.com/images/I/81XvT%2BahkoL._AC_SX679_.jpg" alt="" /></h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}