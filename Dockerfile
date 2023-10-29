FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8000

CMD npx prisma migrate deploy && \
npx prisma generate && \
npx prisma db seed && \
yarn start