import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout"; 

const Reports = () => {
  const [reportData, setReportData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const login = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8081/login?username=manager&password=manager"
        );
        console.log("Login Response:", response); 
        const token = response.data;
        console.log("Token:", token); 

        const reportResponse = await axios.get("http://localhost:8081/report", {
        params: { "token": token }, 
        });

        const data = reportResponse.data;
        console.log("Report Data:", data);
        setReportData(data);
      } catch (error) {
        console.error("Ошибка при получении отчета:", error.message);
        setError("Ошибка при получении отчета");
      }
    };

    login();
  }, []);

  return (
    <Layout>
      <h1>Отчеты</h1>
      {error && <p>{error}</p>}
      {reportData && (
        <div>
          <h2>Отчет</h2>
          <ul>
            {reportData.map((item, index) => (
              <li key={index}>
                <strong>Сотрудник:</strong> {item.employee.name},{" "}
                <strong>Среднее время в пути:</strong> {item.avgRoadTime},{" "}
                <strong>Среднее время выполнения:</strong>{" "}
                {item.avgCompletionTime},{" "}
                <strong>Выполненные задачи:</strong> {item.completedTask}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default Reports;
