import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const handleAssign = async () => {
    try {
      console.log("Начало выполнения assign...");
  
      // Выполнение assign с использованием метода GET
      await axios.get('http://localhost:8081/tasks/assign');
      console.log("Assign выполнен успешно.");
  
      // Получение данных через status после assign
      const loginResponse = await axios.post(
        "http://localhost:8081/login?username=manager&password=manager"
      );
      const token = loginResponse.data;
      const statusResponse = await axios.get("http://localhost:8081/tasks/status",{
        params: { token },
      });
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
  
      const loginResponse = await axios.post(
        "http://localhost:8081/login?username=manager&password=manager"
      );
      const token = loginResponse.data;
  
      // Запрос данных в режиме view
      const response = await axios.get(`http://localhost:8081/tasks/data`, {
        params: { token },
      });
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
