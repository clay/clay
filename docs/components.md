---
id: components
title: Components
sidebar_label: Components
---


Components are reusable, configurable, self-contained bits of the web.

---

## Components Are Data
The anatomy of a component simple, _it's just a JSON object_.

When we talk about a "component", we're generally talking a blueprint for JSON data. This blueprint is then used for an unlimited number of JSON objects which all have _the same structure but can all have different data_. Make sense?

So if a component is just a blueprint for data we can refer to each individual JSON object as an **_instance_** of a component, with each instance being unique.

This concept of what a component is and how a component can have multiple instances forms the basis for all of Clay.

---

## Component API
More details about the component API can be found in the Amphora documentation, but the basics are outlined below.

In this way you can see that the component API has the following structure:

`<SITE HOST>/<SITE PATH (OPTIONAL)/_components/<COMPONENT NAME>/instances/<INSTANCE ID>`

Understanding this structure makes it possible to create, read, update and delete component data in your Clay instance.

To view, all available components in a Clay instance visit the `/_components` route: [nymag.com/_components​](http://nymag.com/_components/)

To view the default data for a component simply request a component by name: `nymag.com/_components/article​`

To view all instances of the component: `nymag.com/_components/article/instances​`

To view a single instance of the component: `nymag.com/_components/article/instances/ID`


---

## If Components Are Data...

Components live in three places:

- On their own! All components and their individual instances are fully available at their REST endpoints

- [Inside a page](pages.md): page-level components are unique to a certain page

- [Inside a layout](layouts.md): layout-level components are shared on every page that uses a certain
layout.

Some simple rules when making components are as follows:

- If you want data that is shared between many pages, put a component in a layout.

- If you want data that is not shared between pages, put a component in a page.
