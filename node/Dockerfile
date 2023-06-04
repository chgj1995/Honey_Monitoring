# 베이스 이미지 정의
FROM node:18

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 설치
COPY package.json package-lock.json ./

# 앱 종속성 설치
RUN npm install

# 필요한 파일 복사
COPY . .

RUN apt-get update && apt-get install -y netcat

EXPOSE 3000

CMD ["bash", "-c", "nc -z db 3306 && npm run start"]