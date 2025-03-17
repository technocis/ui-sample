FROM node:lts-alpine AS build

WORKDIR /usr/src/app

# Add the source code to app
COPY ./ /usr/src/app/

# Install all the dependencies
RUN npm install 

# Generate the build of the application
RUN npm run build

# Multistage build
FROM nginx:latest

COPY --from=build /usr/src/app/dist/gavs/browser /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
