const express = require('express');
const Podlet = require('@podium/podlet');
const axios = require('axios')
const { server } = require('./mocks/server.js')
const { name: podletName } = require('./package.json')
const { authUrl } = require('./config')
const port = process.env.PORT || 7300

const axiosInstance = axios.create({
  withCredentials: true
})

if (process.env.NODE_ENV === 'development') {
  server.listen()
}

const showMe = auth => {
  return auth.securityLevel === '4' ?
    '' :
    'Jeg vises kun for nivå 3'
}

const app = express();

const podlet = new Podlet({
    name: podletName, // required
    version: '1.0.0', // required
    pathname: '/', // required
    manifest: '/manifest.json', // optional, defaults to '/manifest.json'
    content: '/', // optional, defaults to '/'
    development: true, // optional, defaults to false
});

app.use(podlet.middleware());

app.get(podlet.content(), async (req, res) => {
  const { data: authData } = await axiosInstance(authUrl)
  //const { data: oppfolgingData } = await axiosInstance(oppfolgingUrl)
  return res.status(200).podiumSend(showMe(authData));
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).send(podlet);
});

// isAlive/isReady route for Nais
app.get(`/isAlive|isReady`, (req, res) => res.sendStatus(200));

app.listen(port);
