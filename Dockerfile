FROM node:20
WORKDIR /app-node
COPY . .
RUN npm install
ENTRYPOINT node index.js
