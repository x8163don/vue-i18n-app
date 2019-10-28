import Vue from "vue";
import VueI18n from "vue-i18n";

// language package
import zh_TW from "./language/zh_TW.json";
import en_US from "./language/en_US.json";

// enable i18n
Vue.use(VueI18n);

const defauleLanguage = "zh_TW";

// include language package
const messages = {
  zh_TW,
  en_US
};

// instance of i18n
const i18n = new VueI18n({
  locale: defauleLanguage,
  messages
});

// default export
export default i18n;
