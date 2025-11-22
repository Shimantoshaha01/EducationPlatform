import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "EducationPlatform",
});

db.connect((error) => {
  if (error) {
    console.log("MySQL Connection Error:", error);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

export default db;
