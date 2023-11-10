import React from "react";
import Layout from "../layout/Layout";
import "./Tasks.css";

const axios = require("axios").default

const Tasks = () => {
  return (
    <Layout>
      <div className="page-content">
        <h2>Задачи</h2>
        <tr>
          <th>№</th>
          <th>Задача</th>
          <th>Сложность задачи</th>
          <th>Адрес</th>
          <th>Сотрудник</th>
          <th>Статус</th>
          <th>Время</th>
        </tr>
        <tr>
          <th>1</th>
          <th>обслужить клиента</th>
          <th>средняя</th>
          <th>улица пушкинская, 43</th>
          <th>печкин и.а.</th>
          <th>мидл</th>
          <th>1час 30мин</th>
        </tr>
        <tr>
          <th>2</th>
          <th>поставить печать</th>
          <th>легкая</th>
          <th>улица красная, 13</th>
          <th>савин в.г.</th>
          <th>джуниор</th>
          <th>40 мин</th>
        </tr>
      </div>
    </Layout>
  );
};

export default Tasks;
