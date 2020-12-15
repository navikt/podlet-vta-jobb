FROM node:14-alpine AS runtime

ARG VERSION_HASH

WORKDIR /usr/src/app

ENV PORT=7300 \
    NODE_ENV=production \
    VERSION_HASH=$VERSION_HASH

COPY package*.json /usr/src/app/
RUN npm ci
COPY . /usr/src/app

EXPOSE 7300
USER node

CMD ["npm", "start"]

