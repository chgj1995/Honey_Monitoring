-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

-- users 테이블 생성
CREATE TABLE IF NOT EXISTS data (
  id int(11) NOT NULL AUTO_INCREMENT,
  devid int(11) DEFAULT NULL,
  temp float DEFAULT NULL,
  humid float DEFAULT NULL,
  count int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO data (devid, temp, humid, count)
VALUES (1, 0.0, 0.0, 1);

INSERT INTO data (devid, temp, humid, count)
VALUES (1, 0.1, 0.1, -1);

INSERT INTO data (devid, temp, humid, count)
VALUES (1, 0.2, 0.1, -2);

-- 추가적인 초기화 작업이 필요한 경우 여기에 작성할 수 있습니다.
