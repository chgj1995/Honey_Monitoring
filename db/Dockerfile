# 베이스 이미지 정의
FROM mariadb:latest

# 작업 디렉토리 설정
WORKDIR /docker-entrypoint-initdb.d

# 초기화 SQL 파일 복사
COPY init.sql /docker-entrypoint-initdb.d/

# 환경 변수 설정
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword
ENV MYSQL_ROOT_PASSWORD=myrootpassword

# 포트 노출
EXPOSE 3306

# 컨테이너 실행 시 실행할 명령 설정
CMD ["mysqld"]
