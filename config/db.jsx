import mysql from "mysql2/promise";

// mysql.createConnection()

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "hospital_db",
});
