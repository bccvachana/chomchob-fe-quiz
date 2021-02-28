FROM node:12-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
CMD [ "yarn", "dev" ]