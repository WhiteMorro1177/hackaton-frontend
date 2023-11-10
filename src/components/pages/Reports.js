import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./Reports.css";

const Reports = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [taskId, setTaskId] = useState("");
  const [reportData, setReportData] = useState([]);

  const dummyData = [
    {
      employeeId: "8",
      taskCount: 2,
      tasks: [
        { id: 18, latitude: 45.063381, longitude: 38.919267 },
        { id: 1, latitude: 45.019844, longitude: 39.003879 },
      ],
    },
    {
      employeeId: "9",
      taskCount: 2,
      tasks: [
        { id: 20, latitude: 45.063381, longitude: 38.919267 },
        { id: 3, latitude: 45.019844, longitude: 39.003879 },
      ],
    },
    {
      employeeId: "6",
      taskCount: 2,
      tasks: [
        { id: 15, latitude: 45.063381, longitude: 38.919267 },
        { id: 10, latitude: 45.019844, longitude: 39.003879 },
        { id: 20, latitude: 45.063381, longitude: 38.919267 },
        { id: 3, latitude: 45.019844, longitude: 39.003879 },
      ],
    },
    {
      employeeId: "11",
      taskCount: 2,
      tasks: [
        { id: 5, latitude: 45.063381, longitude: 38.919267 },
        { id: 4, latitude: 45.019844, longitude: 39.003879 },
        { id: 20, latitude: 45.063381, longitude: 38.919267 },
        { id: 3, latitude: 45.019844, longitude: 39.003879 },
        { id: 20, latitude: 45.063381, longitude: 38.919267 },
        { id: 3, latitude: 45.019844, longitude: 39.003879 },
      ],
    },
    {
      employeeId: "4",
      taskCount: 2,
      tasks: [
        { id: 2, latitude: 45.063381, longitude: 38.919267 },
        { id: 1, latitude: 45.019844, longitude: 39.003879 },
      ],
    },
    // Другие данные для отчета
  ];

  const handleGenerateReport = () => {
    const filteredData = dummyData.filter((item) => {
      return (
        (!employeeId || item.employeeId === employeeId) &&
        (!taskId || item.tasks.some((task) => task.id.toString() === taskId))
      );
    });

    setReportData(
      filteredData.map((item) => ({
        employeeId: item.employeeId,
        taskCount: item.tasks.length,
        tasks: item.tasks.filter(
          (task) => !taskId || task.id.toString() === taskId
        ),
      }))
    );
  };

  return (
    <Layout>
      <div className="page-content">
        <h2>Отчеты</h2>
        <div className="filters">
          <label htmlFor="employeeId">ID сотрудника:</label>
          <input
            type="text"
            id="employeeId"
            placeholder="поиск по всем id"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />

          <label htmlFor="taskId">ID задачи:</label>
          <input
            type="text"
            id="taskId"
            placeholder="поиск по всем id"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
          />

          <button onClick={handleGenerateReport}>Создать отчет</button>
        </div>
        <div className="report">
          <h3>Сгенерированный отчет</h3>
          {reportData.map((data, index) => (
            <div key={index}>
              <p>
                ID сотрудника: {data.employeeId}, выполненных тасков:{" "}
                {data.taskCount}
              </p>
              <table>
                <thead>
                  <tr>
                    <th>ID Таска</th>
                    <th>Широта</th>
                    <th>Долгота</th>
                  </tr>
                </thead>
                <tbody>
                  {data.tasks.map((task, taskIndex) => (
                    <tr key={taskIndex}>
                      <td>{task.id}</td>
                      <td>{task.latitude}</td>
                      <td>{task.longitude}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
