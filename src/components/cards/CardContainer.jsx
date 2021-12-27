import { Component } from "react";
import Bart from "./Bart";
import Homero from "./Homero";
import Maggie from "./Maggie";

class CardContainer extends Component {
  render() {
    return (
      <div className="container-fluid slider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner p-3">
            <div className="carousel-item active">
              <Maggie />
            </div>
            <div className="carousel-item">
              <Homero />
            </div>
            <div className="carousel-item">
              <Bart />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default CardContainer;
