const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

// ✅ Разрешаем запросы с фронтенда (127.0.0.1:5500)
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

// 🔌 Подключение к PostgreSQL
const pool = new Pool({
  user: "M4sar", // твой логин PostgreSQL
  host: "localhost", // или IP сервера
  database: "Archive", // название базы
  password: "MAXim3366", // пароль
  port: 5432, // стандартный порт PostgreSQL
});

// 🔹 Пример маршрута (данные из таблицы characters)
app.get("/characters", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM characters ORDER BY char_id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ошибка сервера");
  }
});

// 🚀 Запуск сервера
app.listen(3000, () => {
  console.log("Сервер запущен: http://localhost:3000");
});
