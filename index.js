const express = require('express');
const Podlet = require('@podium/podlet');
const axios = require('axios')
const { name: podletName } = require('./package.json')
const { authUrl } = require('./config')
const port = process.env.PORT || 7300
const podletVersion = process.env.VERSION_HASH || `${new Date().getTime()}`;

const axiosInstance = axios.create({
  withCredentials: true
})

if (process.env.NODE_ENV === 'development') {
  const { server } = require('./mocks/server.js')
  server.listen()
}

const showMe = auth => {
  return auth.securityLevel === '4' ?
    '' :
    'Jeg vises kun for nivå 3'
}

const app = express();

const podlet = new Podlet({
    name: podletName,
    version: podletVersion,
    pathname: '/',
    manifest: '/manifest.json',
    content: '/',
    development: true,
    logger: console
});

app.use(podlet.middleware());

app.get(podlet.content(), async (req, res) => {
  try {
    const { data: authData } = await axiosInstance(authUrl)
    //const { data: oppfolgingData } = await axiosInstance(oppfolgingUrl)
    return res.status(200).podiumSend(showMe(authData));
  } catch (error) {
    console.error(error)
    return res.status(200).podiumSend('<div>Jeg er her fordi noe har gått galt</div>');
  }
  
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).send(podlet);
});

// isAlive/isReady route for Nais
app.get(`/isAlive|isReady`, (req, res) => res.sendStatus(200));

app.listen(port);
