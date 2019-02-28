---
id: pages
title: Pages
sidebar_label: Pages
---
---

Overview
Pages are a top-level data structure that only contains lists of components, they do not contain data themselves. Each list of components is called a ***page area*** and there is no limit for the number of page areas that can exist on a single page. A page has only one required property, `layout`, which must reference a valid instance of a layout. The layout instance that the page references will be the shell that the data specific to a page is injected into when rendering.

For more details on interacting with the pages API, see the Amphora documentation around pages (coming soon)

---

## Page Specific Data
All data specific to a page should be an Array of component instances. These component instances will be rendered on the page in a [component-list](https://claycms.gitbook.io/kiln/kiln-fundamentals/components/manipulating-components#component-lists)  inside of the layout's template, which is discussed more in the Layouts documentation.

It should be noted that the order of the component instances inside the Array will determine the order in which the component data is rendered in each component-list, but the order of the properties in the page data does not matter at all. The DOM flow (when talking about HTML pages) is determined by the layout's template, not the page data.

```js
{
    "layout": "domain.com/_layouts/layout/instances/default",
    "main": [
        "domain.com/_components/article/instances/new",
        "domain.com/_components/recent-articles/instances/new"
    ]
}
```

