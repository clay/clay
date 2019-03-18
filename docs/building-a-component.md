---
id: building-a-component
title: Building A Component
sidebar_label: Building A Component
---

> This page is going to assume you have a running instance of Clay to experiment with. If don't have one already you can [**checkout the starter kit**](https://github.com/clay/clay-starter) and see some examples of components.

This page descibes building a component. Before looking at the files that constitute a component [it's a good idea to read about what a component is](components.md). If you feel good about those concepts then let's outline a few basics about the component structure:

- A component must live in the `components` directory at the root of your Clay instance
- The directory name the omponent lives in will be the name of the component
- Your component's name should be [kebab case](http://wiki.c2.com/?KebabCase)

## Anatomy of a Component

A component directory has the following struture, with only two of the following files being required. Required files will be denoted by an astrisk (`*`).

```bash
my-component
  ├── schema.yml*
  ├── bootstrap.yml*
  ├── model.js
  ├── client.js
  └── template.hbs
```

### Schema.yml

Schemas (or schemata) are the main connective tissue between the REST API and [Kiln](glossary.md#kiln). The schema of a component defines what kinds of editable fields components have as well as how those fields are grouped. When creating a component for the first time *a schema.yml* file is required for the component to be accessible via it's REST endpoint.

Documentation [exists describing the Kiln API for component editing](https://claycms.gitbook.io/kiln/kiln-fundamentals/components/editing-components) and what declarations are allowed in your schema file. For the purpose. For the purpose of this quick intro ensure the `_description` field is added to your schema with a short description on what your building.

```yaml
_description: |
  My cool component!
```

---

### Bootstrap.yml

[This file](glossary#bootstrap-file) describes the data that all new instances of your component will start with when created using Clay's REST API. It's essential because each time Amphora starts up it will read from this file and [write this starter data](glossary#bootstrap-action) into the database.

Ensure your component has a `bootstrap.yml`, here's an example:

```yaml
_components:
  my-component:
    foo: true
    bar: 123
    baz: A string
```

---

### Model.js

This file allow components to perform logic on their data before saving and rendering. This file exposes two methods which have the exact same function signature:

- `save`: this function is called when the data for a component is saved.
- `render`: this function is called after the data has been pulled from the database but before the data has been templated by a renderer.

Both of these functions receive the following data:

- `ref` (String): the uri of the component
- `data` (Object): the component instance's data
- `locals` (Object): an object [containing information about the request](glossary#locals)

Both of these functions must return _either an Object or a Promise which resolves an Object_ whose value is the data for the component. On a `save` the Object will be written to the database and on a `render` the Object will be passed to the data composer. Both the save() and render() methods are optional, as many components require either one or the other.

Example:

```javascript
module.exports.render = (uri, data, locals) => {
  // ...
  return Promise.resolve(data);
}

module.exports.save = (uri, data, locals) => {
  // ...
  return data;
}
```

---

### Client.js

This file is simply the client-side controller for components when rendered as HTML. This will must export one function which will receive the DOM node for _each instance of the component on the page_. If your component appears in four different places on the page it will be called once for each instance.

Example:

```javascript
module.exports = el => {
  console.log(el); // Will print a DOM element for each component instance on the page
}
```

---

### Template.hbs

Finally, your template is a [Handlebars](https://handlebarsjs.com/expressions.html) file which will be passed your component's data during templating. Handlebars is used because the clients can be rendered on the server and then re-rendered in the client when a user is editing, making for a snappy editing experience.

Templates have a [few assumptions built into them by Kiln](https://handlebarsjs.com/expressions.html) which we will quickly outline:

- A template has only one root element if inside the `body` of the HTML document
- The root DOM element has a `data-uri` property on it's root element
- If in the `head` of the page an HTML comment is included with the `data-uri` attribute defined

Examples:

```html
<!-- data-uri="{{ default _ref _self}}" -->
<meta name="something" content="something else" />
<meta name="another thing" content="another bit of data" />
```

```html
<div data-uri="{{ default _ref _self}}" class="{{ componentVariation }}">
<!-- The contents of your component -->
</div>
```

## Putting It All Together

While this introduction covered the most common files in a component directory we didn't really discuss the development process for a component. We'll come to that next, but for now let's test that we can get access to your component's REST endpoint to get the starter data before moving on.

Assuming you're using the [Clay starter](https://github.com/clay/clay-starter) and that your component name is `my-component`, you should be able to navigate to [`localhost/_components/my-component`](localhost/_components/my-component) and see the default data for your component.

In the following pages we'll look at iterating on a component, compiling your component's assets/styles and adding your component to [component lists](https://claycms.gitbook.io/kiln/kiln-fundamentals/components/manipulating-components#component-lists) in other components.
