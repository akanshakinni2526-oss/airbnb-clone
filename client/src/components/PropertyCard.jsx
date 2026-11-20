import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property._id}`}
      className="property-card-link"
    >
      <div className="property-card">
        <img
          src={property.image}
          alt={property.title}
          className="property-image"
        />

        <h3>{property.title}</h3>

        <p>{property.location}</p>

        <strong>₹{property.price} night</strong>
      </div>
    </Link>
  );
}

export default PropertyCard;