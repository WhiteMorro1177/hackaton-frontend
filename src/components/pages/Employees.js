// Employees.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const login = async () => {
      try {
        const loginResponse = await axios.post(
          "http://localhost:8081/login?username=manager&password=manager"
        );
        const token = loginResponse.data;

        const response = await axios.get("http://localhost:8081/employees", {
          params: { token },
        });
        setEmployees(response.data);
      } catch (error) {
        console.error("Ошибка при получении сотрудников:", error.message);
        setError("Ошибка при получении сотрудников");
      }
    };

    login();
  }, []);

  return (
    <Layout>
      <h1>Сотрудники</h1>
      {error && <p>{error}</p>}
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>Имя:</strong> {employee.name},{" "}
            <strong>Должность:</strong> {employee.grade.gradeName}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Employees;
