FROM node:12.13.0

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

COPY ./app.js /app/app.js
COPY ./views /app/views
COPY ./routes /app/routes
COPY ./public /app/public

WORKDIR /app

RUN npm i
ENTRYPOINT ["nodejs", "app.js"]