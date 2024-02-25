import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Recipe = ({ setId }) => {
  const [recipeData, setRecipeData] = useState([]);

  const [deleteData, setDeleteData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get(
        "https://joexfakijtnyoutpzlbt.supabase.co/rest/v1/recipes?select=*",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZXhmYWtpanRueW91dHB6bGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MDMwMDEsImV4cCI6MjAyNDM3OTAwMX0.12jz3HTQ2Yb5f9J-fPUUjoDWQ3KhZhSVNGtm5AgRB78",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZXhmYWtpanRueW91dHB6bGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MDMwMDEsImV4cCI6MjAyNDM3OTAwMX0.12jz3HTQ2Yb5f9J-fPUUjoDWQ3KhZhSVNGtm5AgRB78",
          },
        }
      )
      .then((res) => setRecipeData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    setId(id);

    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://joexfakijtnyoutpzlbt.supabase.co/rest/v1/recipes?id=eq.${id}`,
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
      .then((res) => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Details</th>

            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {recipeData.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        onClick={() => {
          navigate("/Create");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Recipe;
