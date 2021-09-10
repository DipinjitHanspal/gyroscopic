FROM node:lts-alpine
WORKDIR /to-do
COPY ./dist/apps/to-do .
ENV PORT=3334
EXPOSE ${PORT}
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs hbs
CMD node ./main.js
