FROM node:20

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --force

COPY . .

ENV NODE_ENV=production

RUN npm run build
EXPOSE 3000
CMD npm run start
