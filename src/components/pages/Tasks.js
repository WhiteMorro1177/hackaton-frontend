import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./Tasks.css"

import { getData, assignTasks } from "../../http/sender";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const handleAssign = async () => {
    try {
      console.log("Начало выполнения assign...");
  
      // Выполнение assign с использованием метода GET
      await assignTasks("/tasks/assign");
      console.log("Assign выполнен успешно.");
  
      const token = localStorage.getItem("token");
      const statusResponse = await getData("/tasks/status", token);
      console.log("Данные получены успешно:", statusResponse.data);
  
      setTasks(statusResponse.data);
    } catch (error) {
      console.error(`Ошибка при выполнении assign или получении задач:`, error.message);
      setError(`Ошибка при выполнении assign или получении задач`);
    }
  };
  
  const handleView = async () => {
    try {
      console.log("Начало получения задач в режиме view...");
  
      // Запрос данных в режиме view

      const token = localStorage.getItem("token");
      const response = await getData("/tasks/data", token)
      console.log("Данные получены успешно:", response.data);
  
      setTasks(response.data);
    } catch (error) {
      console.error(`Ошибка при получении задач (view):`, error.message);
      setError(`Ошибка при получении задач (view)`);
    }
  };
  

  return (
    <Layout>
      <h1>Управление задачами</h1>
      <div>
        <button onClick={handleView}>Показать все задачи</button>
        <button onClick={handleAssign}>Распределить задачи</button>
      </div>
      {error && <p>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>Название задачи:</strong> {task.taskName},{" "}
            <strong>Статус:</strong> {task.status || "Статус не определен"}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Tasks;
