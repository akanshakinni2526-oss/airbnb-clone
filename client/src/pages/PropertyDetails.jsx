import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    API.get(`/api/properties/${id}`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!property) {
    return <p>Loading property...</p>;
  }

  return (
    <div className="property-details">
      <img
        src={property.image}
        alt={property.title}
        className="property-details-image"
      />

      <h1>{property.title}</h1>

      <p>{property.description}</p>

      <p>
        <strong>Location:</strong> {property.location}
      </p>

      <p>
        <strong>Price:</strong> ₹{property.price} per night
      </p>

      <p>
        <strong>Guests:</strong> {property.guests}
      </p>
    </div>
  );
}

export default PropertyDetails;