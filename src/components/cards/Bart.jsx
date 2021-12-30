import bart from "../../img/bart.jpg";

const Bart = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={bart} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Leer mas...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bart;
