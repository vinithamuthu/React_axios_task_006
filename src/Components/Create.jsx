import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [createData, setCreateData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //e.target.name , e.target.value
    setCreateData((preData) => ({
      ...preData,
      [name]: value, //price : 93000
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://joexfakijtnyoutpzlbt.supabase.co/rest/v1/recipes",
        createData,
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZXhmYWtpanRueW91dHB6bGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MDMwMDEsImV4cCI6MjAyNDM3OTAwMX0.12jz3HTQ2Yb5f9J-fPUUjoDWQ3KhZhSVNGtm5AgRB78",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZXhmYWtpanRueW91dHB6bGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MDMwMDEsImV4cCI6MjAyNDM3OTAwMX0.12jz3HTQ2Yb5f9J-fPUUjoDWQ3KhZhSVNGtm5AgRB78",
            "Content-Type": "application/json",
            Prefer: "resolution=merge-duplicates",
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/recipes");
  };

  return (
    <div className="container-sm">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Name:</label>
          <input
            placeholder="Enter recipe name"
            className="form-control"
            type="text"
            name="name"
            value={createData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Recipe Price:</label>
          <input
            placeholder="400"
            className="form-control"
            type="text"
            name="price"
            value={createData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Recipe Description:</label>
          <textarea
            placeholder="Enter recipe desciption"
            className="form-control"
            type="text"
            name="description"
            value={createData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Recipe Image:</label>
          <input
            placeholder="Enter recipe image url"
            className="form-control"
            type="text"
            name="image"
            value={createData.image}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
