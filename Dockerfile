FROM node:18 AS build

WORKDIR /app

COPY . .

# Uninstalling some packages to avoid error and are not needed
# Uninstall playwright to avoid error
RUN npm uninstall @web/test-runner-playwright && npm install

RUN npm run build

FROM nginx

COPY --from=build /app/_site /usr/share/nginx/html

EXPOSE 80
