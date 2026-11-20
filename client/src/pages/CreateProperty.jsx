import { useState } from "react";
import API from "../api";

function CreateProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    guests: "",
    image: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await API.post(
        "/api/properties",
        formData,
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      alert(response.data.message);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to create property"
      );
    }
  };

  return (
    <div className="create-property">
      <h1>Create Property</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price per night"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="guests"
          placeholder="Maximum guests"
          value={formData.guests}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">
          Create Property
        </button>
      </form>
    </div>
  );
}

export default CreateProperty;