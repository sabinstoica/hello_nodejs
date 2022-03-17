FROM node:16-alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

USER node
EXPOSE 3000

CMD ["node", "index.js"]
