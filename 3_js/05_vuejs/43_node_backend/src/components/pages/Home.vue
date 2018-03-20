<template lang="html">
  <main id="main" class="home">
    <doomsday id="doomsday"></doomsday>
    <h1>Vue + Backend Node</h1>
    <h2>Liste des dépendances</h2>
    <p>
      Commencer par installer les dépendances du projet =><br><br>
      <code>
        vue init webpack-simple [nom-app]<br>
        npm install -g pm2<br>
        npm install --save axios<br>
        npm install --save express<br>
        npm install --save body-parser<br>
        npm install --save mysql<br>
        npm install --save vue-router<br>
        <b style="color: purple;">npm install --save multer</b><br>
        <span>-------------------------</span><br>
        npm install --save @fortawesome/fontawesome<br>
        npm install --save @fortawesome/fontawesome-free-solid<br>
        npm install --save @fortawesome/fontawesome-free-regular<br>
        npm install --save @fortawesome/fontawesome-free-brands<br>
      </code>
    </p>
    <h2>Configuration</h2>
    <p>
      Il faut éditer les fichiers package.json et webpack.config.js
    </p>
    <h2 class="title">package.json</h2>
    <code>
  <pre>
  "scripts": {
    "vue": "cross-env NODE_ENV=development pm2 start -n vue-client webpack-dev-server -f",
    "server": "pm2 start index.js -n nodeserver -f --watch",
    "build": "cross-env NODE_ENV=production webpack — progress — hide-modules",
    "dev": "npm run server | npm run vue"
  },
  </pre>
    </code>
    <h2>webpack.config.js</h2>
    <code>
  <pre>
  module.exports = {
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true,
      inline: true,
      hot: true,
      open: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    watch: true,

    /* ... la suite */

  }
  </pre>
    </code>
    <h2>Websites des dépendances</h2>
    <ul>
      <li>
        <a href="http://pm2.keymetrics.io/docs/usage/quick-start/" target="_blank">PM2</a>
      </li>
      <li>
        <a href="https://www.npmjs.com/package/axios" target="_blank">Axios</a>
      </li>
      <li>
        <a href="http://expressjs.com/" target="_blank">Express</a>
      </li>
      <li>
        <a href="https://github.com/expressjs/body-parser" target="_blank">Body Parser</a>
      </li>
      <li>
        <a href="https://github.com/mysqljs/mysql" target="_blank">node-mysql</a>
      </li>
      <li>
        <a href="https://router.vuejs.org/en/" target="_blank">vue-router</a>
      </li>
    </ul>
  </main>
</template>

<script>
import Doomsday from "./../doomsday/Doomsday.vue";

export default {
  components: {
    Doomsday,
  }
}
</script>

<style lang="css" scoped>
</style>
