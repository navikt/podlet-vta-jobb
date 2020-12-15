FROM node:14-alpine AS runtime

WORKDIR /usr/src/app

ARG BASE_PATH
ARG VERSION_HASH
ENV PORT=7300 \
    NODE_ENV=production \
    VERSION_HASH=$VERSION_HASH

COPY package*.json /usr/src/app/
RUN npm ci
COPY . /usr/src/app

EXPOSE 7300
USER node

CMD ["npm", "start"]

