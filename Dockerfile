FROM node:15-alpine

COPY . .

RUN yarn install --production

CMD node dist/index.js
