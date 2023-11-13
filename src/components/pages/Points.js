// BusinessPoints.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";

const Points = () => {
  const [Points, setPoints] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const login = async () => {
      try {
        const loginResponse = await axios.post(
          "http://localhost:8081/login?username=manager&password=manager"
        );
        const token = loginResponse.data;

        const response = await axios.get("http://localhost:8081/business_points", {
          params: { token },
        });
        setPoints(response.data);
      } catch (error) {
        console.error("Ошибка при получении точек:", error.message);
        setError("Ошибка при получении точек");
      }
    };

    login();
  }, []);

  return (
    <Layout>
      <h1>Точки бизнеса</h1>
      {error && <p>{error}</p>}
      <ul>
        {Points.map((point) => (
          <li key={point.id}>
            <strong>Адрес:</strong> {point.address}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Points;
