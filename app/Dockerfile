FROM node:16-alpine

WORKDIR  /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3333

ENTRYPOINT ["npm", "run", "dev"]
