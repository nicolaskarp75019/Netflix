import "./App.css";
import movies from "./assets/movies.json";

const App = () => {
  return (
    <div>
      <h1>{movies.category}</h1> {/* Affiche la catégorie */}
      <div className="image-gallery">
        {movies.images &&
          movies.images.map((image, index) => (
            <img key={index} src={image} alt={`Film ${index + 1}`} />
          ))}
      </div>
    </div>
  );
};

export default App;
