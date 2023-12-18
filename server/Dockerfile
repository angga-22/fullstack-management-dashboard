ARG APP="rentalcar-api"

FROM node:18.17-bullseye-slim as build-image

WORKDIR /usr/src/app 

COPY package*.json .

COPY tsconfig.json .

COPY . . 


RUN yarn install --immutable

RUN npx prisma generate
RUN npx tsx -p 



FROM node:18.17-bullseye-slim

WORKDIR /usr/src/app 

COPY package*.json .

COPY --from=build-image ./usr/src/app/dist ./dist 

RUN yarn install --immutable --production

COPY . .

EXPOSE 3000

CMD ["node", "dist/src/index.js"]