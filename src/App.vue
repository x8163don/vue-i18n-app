<template>
  <div id="app">
    <button @click="$i18n.locale ='zh_TW'">中文</button>

    <button class="space" @click="$i18n.locale ='en_US'">Engilsh</button>

    <div id="nav">
      <router-link to="/">{{$t('app.labels.home')}}</router-link>|
      <router-link to="/about">{{$t('app.labels.about')}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  width: 80px;
  height: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.space {
  margin-left: 5px;
}
</style>
