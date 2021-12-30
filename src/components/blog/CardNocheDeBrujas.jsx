import nocheDeBrujas from "../../img/nochedebrujas.jpg";

const CardNocheDeBrujas = () => {
  return (
    <article className="d-flex flex-column mb-5">
      <h1 className="fs-5">
        Episodio "Especial de Noche de Brujas VII", Octubre 27, 1996.
      </h1>
      <img
        className="img-blog"
        src={nocheDeBrujas}
        width={500}
        alt="episodio"
      />
      <p className="fs-10 mt-3 card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe
        neque asperiores error voluptatibus quis, eveniet impedit aperiam
        repudiandae eligendi ab non velit corrupti! Ipsa ducimus nesciunt
        corporis obcaecati quidem rerum amet quas optio quae, magnam vel quod
        nobis, eos ipsam, placeat nostrum molestias. Neque saepe quam natus
        nihil quibusdam enim officiis eligendi ullam! Autem aperiam omnis qui
        vero consequatur cumque voluptate, illo placeat sint eaque porro
        commodi, dolorem hic nostrum! Voluptate laborum nulla at optio
        recusandae hic, repudiandae voluptatum, similique molestiae deserunt
        obcaecati animi laboriosam. Tempora eos sunt quos dolore debitis autem
        vero eaque incidunt suscipit officia, aut delectus.
      </p>
    </article>
  );
};

export default CardNocheDeBrujas;
