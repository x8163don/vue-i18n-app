# How to use?

1.  in html element

```html
<router-link to="/">{{$t('app.home_page_name')}}</router-link>|
```

2.  in html element attribute

```html
<input :placeholder="$t('home.placeholder')" />
```

3.  in script

```javascript
computed: {
    getTitle() {
        return this._i18n.t("about.title", { name: this.name });
    }
}
```

[more...](https://kazupon.github.io/vue-i18n/introduction.html#sponsors)
