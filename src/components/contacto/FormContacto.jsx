const FormContacto = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form className="p-5 bg-light form">
        <div className="d-flex flex-column mb-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="nombre@example.com"
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            className="form-control mb-3"
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <input
          className="btn btn-outline-danger"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default FormContacto;
