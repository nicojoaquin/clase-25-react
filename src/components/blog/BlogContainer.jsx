import CardEducacion from "./CardEducacion";
import CardNocheDeBrujas from "./CardNocheDeBrujas";

const BlogContainer = () => {
  return (
    <main className="container p-5 bg-light">
      <CardNocheDeBrujas />
      <CardEducacion />
    </main>
  );
};

export default BlogContainer;
