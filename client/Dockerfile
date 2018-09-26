FROM node:8 as builder

WORKDIR usr/src/app

COPY ./package.json ./
RUN npm install --only=production

COPY . .

RUN npm run build

FROM nginx

EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html 