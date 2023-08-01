# Stage 1: Build Angular app
FROM node:16-alpine AS build

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

# Stage 2: Serve Application using Nginx Server with HTTPS
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy the built Angular app from the build stage
COPY --from=build /app/dist/gui .

COPY ./localhost.pem /etc/nginx/ssl/cert.pem
COPY ./localhost-key.pem /etc/nginx/ssl/key.pem

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443