FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN yarn install --prod

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]