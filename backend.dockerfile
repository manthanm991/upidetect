FROM node:lts AS express-mongo
FROM node:19.5.0-alpine
WORKDIR /app/upidetectbackend
COPY ./upidetectbackend/package*.json ./
RUN npm install
COPY ./upidetectbackend .

EXPOSE 8000
EXPOSE 27017
CMD ["npm", "run", "start"]