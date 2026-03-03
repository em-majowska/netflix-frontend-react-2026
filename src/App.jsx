import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Header />
      <main>
        {data.map((el, index) => {
          return <Section key={index} name={el.category} movies={el.images} />;
        })}
      </main>
    </>
  );
}

export default App;
