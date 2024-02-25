import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-4 g-4">
        {recipeData.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-caption">&#8377;{item.price}</h5>

                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
