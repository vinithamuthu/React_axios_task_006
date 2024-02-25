import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://joexfakijtnyoutpzlbt.supabase.co/rest/v1/recipes?id=eq.${id}&select=*`,
      {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZXhmYWtpanRueW91dHB6bGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MDMwMDEsImV4cCI6MjAyNDM3OTAwMX0.12jz3HTQ2Yb5f9J-fPUUjoDWQ3KhZhSVNGtm5AgRB78",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZXhmYWtpanRueW91dHB6bGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MDMwMDEsImV4cCI6MjAyNDM3OTAwMX0.12jz3HTQ2Yb5f9J-fPUUjoDWQ3KhZhSVNGtm5AgRB78",
        },
      }
    );
    // .then((res) => setEditData(res.data))
    // .catch((err) => console.log(err));
    if (data && data.length) {
      setEditData(data[0]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; //e.target.name , e.target.value
    setEditData((preData) => ({
      ...preData,
      [name]: value, //recipe_price : 93000
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `https://joexfakijtnyoutpzlbt.supabase.co/rest/v1/recipes?id=eq.${id}`,
        editData,
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
    <div>
      <h1>Edit Component</h1>

      <form onSubmit={handleFormSubmit}>
        <label>
          recipeId:
          <input
            type="text"
            name="id"
            value={editData.id}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          recipe Name:
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          recipe Price:
          <input
            type="text"
            name="price"
            value={editData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          recipe desciption:
          <input
            type="text"
            name="descirption"
            value={editData.description}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
