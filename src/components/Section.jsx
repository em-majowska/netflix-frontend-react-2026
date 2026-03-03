import Title from "./Title";

const Section = ({ name, movies }) => {
  return (
    <section>
      <Title name={name} />
      <div className="carousel">
        {movies.map((img, index) => {
          return <img key={index} src={img} />;
        })}
      </div>
    </section>
  );
};

export default Section;
