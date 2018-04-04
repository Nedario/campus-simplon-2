script pour les users windows

scripts: {
  "vue": "cross-env NODE_ENV=development pm2 start -n vue-client webpack-dev-server -f",
  "server": "nodemon index.js",
  "build": "cross-env NODE_ENV=production webpack — progress — hide-modules",
  "dev": "start npm run server && start npm run vue"
}
