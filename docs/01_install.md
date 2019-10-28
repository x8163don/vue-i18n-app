# Install

### Step 1:install i18n dependency

```bash
npm install vue-i18n
```

### Step 2: add lang.js & language json

```bash
...

|____src
| |____App.vue
| |____lang
| | |____lagnuage
| | | |____zh_TW.json
| | | |____en_US.json
| | |____lang.js
...

```

在`src`下新增`lang`資料夾用來放置跟語系相關用途的資料並新增`lang.js`以及`language`資料夾 ,並新增`zh_TW.json`及`en_US.json`語系檔

### Step 3: initialize lang.js

Reference lang.js

### Step 4: initialize language

Reference zh_TW.json
Reference en_US.json

### Step 5: enable i18n on vue

main.js

```javascript
import i18n from "@/lang/lang.js"

...

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
```
