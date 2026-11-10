# DEMO ONLY: intentionally insecure image so IaC scanning has findings.
FROM node:latest
USER root
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 22
CMD ["node", "src/index.js"]
