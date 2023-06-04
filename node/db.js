const mysql = require('mysql2');

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: 'db',          // MariaDB 컨테이너의 호스트 이름 (docker-compose.yml에서 설정한 서비스 이름)
  user: 'myuser',      // MariaDB 사용자 이름
  password: 'mypassword',  // MariaDB 비밀번호
  database: 'mydatabase'   // MariaDB 데이터베이스 이름
});

function connect() {
  // MariaDB 연결
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MariaDB:', err);
      return;
    }
    console.log('Connected to MariaDB!');
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM data', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

function close() {
  // 연결 종료
  connection.end();
}

module.exports = {
  connect,
  getData,
  close
};