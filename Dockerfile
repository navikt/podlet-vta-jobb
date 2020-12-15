FROM node:14-alpine AS runtime

WORKDIR /usr/src/app

ENV PORT=7300 \
    NODE_ENV=production

COPY package*.json /usr/src/app/
RUN npm ci
COPY . /usr/src/app

EXPOSE 7300
USER node

CMD ["npm", "start"]

