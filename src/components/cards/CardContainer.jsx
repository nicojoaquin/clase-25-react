import Bart from "./Bart";
import Homero from "./Homero";
import Maggie from "./Maggie";

const CardContainer = () => {
  return (
    <div className="container-fluid card-container">
      <div className=" d-flex align-items-center justify-content-evenly p-3 cards">
        <Maggie />
        <Homero />
        <Bart />
      </div>
    </div>
  );
};

export default CardContainer;
