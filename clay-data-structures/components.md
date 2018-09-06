---
description: 'Components are reusable, configurable, self-contained bits of the web.'
---

# Components

## Components Are Data

The anatomy of a component simple, _it's just a JSON object_.

When we talk about a "component", we're generally talking a blueprint for JSON data. This blueprint is then used for an unlimited number of JSON objects which all have _the same structure but can all have different data_. Make sense?

So if a component is just a blueprint for data we can refer to each individual JSON object as an _**instance**_ of a component, with each instance being unique. 

This concept of what a component is and how a component can have multiple instances forms the basis for all of Clay.

## Component API

More details about the component API can be found in the Amphora documentation, but the basics are outlined below.

* To view all available components in a Clay instance visit the `/_components` route: [nymag.com/\_components](https://nymag.com/_components)
* To view the default data for a component simply request a component by name: [nymag.com/\_components/article](https://nymag.com/_components/article)
* To view all instances of the component: [nymag.com/\_components/article/instances](https://nymag.com/_components/article/instances)
* To view a single instance of the component: [nymag.com/\_components/article/instances/new](https://nymag.com/_components/article/instances/new)

In this way you can see that the component API has the following structure:

**&lt;SITE HOST&gt;/&lt;SITE PATH** _**\(OPTIONAL\)**_**/**\_components**/&lt;COMPONENT NAME&gt;/**instances**/&lt;INSTANCE ID&gt;**

Understanding this structure makes it possible to create, read, update and delete component data in your Clay instance.

## If Components Are Data...

Components live in three places:

* On their own! All components and their individual instances are fully available at their REST endpoints
* [Inside a page](pages.md): page-level components are _unique_ to a certain page
* [Inside a layout](layouts.md): layout-level components are _shared_ on every page that uses a certain layout.

Some simple rules when making components are as follows:

* If you want data that is _shared_ between many pages, put a component in a layout.
* If you want data that is _not shared_ between pages, put a component in a page.

