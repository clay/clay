---
id: glossary
title: Glossary
sidebar_label: Glossary
---

> Below is a list of terms commonly used in Clay that are helpful to know when discussing the system.

<hr/>

## Kiln

The edit interface for Clay which can he found here: [https://github.com/clay/clay-kiln](https://github.com/clay/clay-kiln). This package is a Vue app which sits on top of your page in edit mode and generated the fields, forms and panes which users interact with. It also supports its own plugin system so that you can customize your editing experience based on user needs.

A user can enter edit mode in two ways:

- Hold the `shift` key and type `CLAY`
- Add `?edit=true` to any Clay url

Kiln is actually just a component itself and abides by the same API's as any other component.

<hr/>

## Amphora

Amphora is the data composer and REST API of Clay. It's core responsibilities include:

- Assigning core routes for each data structure
- Composing JSON data when a request comes in
- Exposing hooks for server-side plugins
- Passing composed data to renderers for templating before being sent back to the client
- Discovering each plugin available in an instance of Clay
- Migrating component data as components iterate over time

<hr/>

## Amphora HTML

The supported HTML renderer for Clay. It receives data from [Amphora](#amphora) and uses Handlebars templates to render the data.

It's also helps get data from the server to [Kiln](#kiln) when the user is in edit mode.

<hr/>

## Schema

A schema file (either `schema.yml` or `schema.yaml`) is a declaration for how a component is edited in [Kiln](#kiln). A schema file must be present in a component's directory so that [Amphora](#amphora) can identify the component to create the necessary endpoints.

<hr/>

## Bootstrap _(file)_

The bootstrap file (`bootstrap.yml` or `bootstrap.yaml`) file is located in each component's directory and specifies the starting data for a brand new component instance. The structure of the file is as follows:

```yaml
_components:
  component-a: # The name of the component, can be any kebab case string
    foo: true
    bar: 123
    baz: "A string"
```

A bootstrap's contents will become available at the root route for a components: `<HOST>/_components/<COMPONENT NAME>`. For the example above with a server running locally you could find the data at `localhost/_components/component-a`.

> Make sure to read about [the bootstrap action](#bootstrap-action) to understand the implications this file has.

<hr/>

## Bootstrap _(action)_

When Amphora first starts up it looks into each component's directory and reads the `bootstrap.(yml|yaml)` file, parses it into JSON and then saves the value to the database. This process is referred to as the instance bootstrapping itself.

The issue with this process is that your default instance can never be reliably manipulated in the UI because it will always reset back to the value declared in your `bootstrap.yml` file when the server restarts. **You should never reference this instance anywhere in your live pages**, it's sole purpose is to provide Kiln some starting data when creating new instances of your component.

<hr/>

## Instance

When we make a component in Clay we're really making a template that is copied over and over and used in different places across a/multiple site(s). Each one of these copies is unique and contains its own data that is different from all the other copies, but what's important is that all the copies inherit the same editing interface, template and starter data. We call these _instances_ of a component.

When we talk about the API for components we like to illustrate the path as follows: `/_components/<COMPONENT NAME>/instances/<INSTANCE ID>`
