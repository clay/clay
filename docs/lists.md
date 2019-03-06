---
id: lists
title: Lists
sidebar_label: Lists
---

---

Lists serve as an unstructured data store for JSON data that any Clay instance might need to use. The only requirement for the data inside an instance of a list is that the data is valid JSON.

---

## Viewing All Lists
Lists — like other data structures in Clay — have unique instances. To view a list of all instances in your Clay installation simply navigate to the `/_lists` endpoint at the root of your install. For example, navigating www.vulture.com/_lists will return an Array of list id's, similar to how requesting www.vulture.com/_pages will return a list of all pages.

### Example Response:
```js
[
  "www.vulture.com/_lists/authors",
  "www.vulture.com/_lists/layout-labels",
  "www.vulture.com/_lists/new-pages",
  "www.vulture.com/_lists/tags"
]
```

## Viewing a Single List
Once you know the id of a list you would like to see the contents of, simply request that specific uri in your browser. For example, www.vulture.com/_lists/authors will return a list of authors who have published content on Vulture. 

### Example Response:
```js
[{ 
        "text": "Halle Kiefer", 
        "count": 45 
    }, { 
        "text": "Josef Adalian", 
        "count": 8 
    }, { 
        "text": "Devon Ivie", 
        "count": 32 
    }, { 
        "text": "Nikita Richardson", 
        "count": 1 
    }, { 
        "text": "Anne Victoria Clark", 
        "count": 47 
    }, { 
        "text": "Opheli Garcia Lawler", 
        "count": 3 
    }, { 
        "text": "Jasmine Sanders", 
        "count": 3 
    }, { 
        "text": "Angelica Jade Bastién", 
        "count": 3 
    }, 
    ... // Truncated for brevity
]
```
The important thing to realize is that the data in this list is arbitrary and is not something dictated by the Clay platform. The data is kept up-to-date by components as they are edited and published. This list can then turn around and be used by any component (such as a [data source for autocomplete](https://claycms.gitbook.io/kiln/kiln-fundamentals/components/inputs#simple-list)) or any external service. The content of lists are completely dictated by the implementation.
