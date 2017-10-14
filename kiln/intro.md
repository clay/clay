# Kiln

Kiln is a client-side JavaScript library that allows users to edit Clay components on pages composed by [Amphora](https://github.com/clay/amphora).

To include Kiln on you site, you'll need to:

1. Download Kiln into your Clay instance (`npm install --save clay-kiln`)
2. Add the Kiln library to your site
3. Add Kiln to the page's list of components

## Adding Kiln to your Clay Site

After you've added the node module to your site, be sure that `node_modules/clay-kiln/clay-kiln-edit.js` and `node_modules/clay-kiln/clay-kiln-view.js` are available in the `assetPath` of your Clay site.

Kiln is a component that needs to be bootstrapped to pages that you want edtiable.

In the bootstrap file for your site, add `clay-kiln` to the list of components. Note: give it non-empty data, e.g. `allow: true`.

```yaml
components:
  clay-kiln:
    instances:
      general:
        allow: true
```

Then create a _non-editable_ component list in your layout (preferably near the end), and add a reference to your Kiln instance.

```yaml
components:
  layout:
    instances:
      article:
        kilnInternals:
          -
            _ref: /components/clay-kiln/instances/general
```

Make sure you add that component list to your layout template, and double check that it isn't editable.

```handlebars
<div class="kiln-internals">{{ > component-list kilnInternals }}</div>
```
