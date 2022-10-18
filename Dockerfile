FROM node:16.13.2 AS builder

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16.13.2 AS production

WORKDIR /var/www/production

COPY --from=builder /var/www/app/package.json /var/www/app/package-lock.json ./

RUN npm install --production

COPY --from=builder /var/www/app/dist ./dist
COPY --from=builder /var/www/app/server.js ./

EXPOSE 3000

CMD ["node", "./server.js"]
