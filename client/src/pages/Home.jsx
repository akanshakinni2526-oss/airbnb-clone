import { useEffect, useState } from "react";
import API from "../api";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    API.get("/api/properties")
      .then((response) => {
        console.log("Properties from API:", response.data);
        setProperties(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <h1>Find your perfect stay</h1>

        <p>
          Discover beautiful places to stay anywhere in the world.
        </p>

        <SearchBar />
      </section>

      <section className="properties-section">
        <h2>Popular stays</h2>

        <div className="property-grid">
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;