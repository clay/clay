---
id: uris
title: Uris
sidebar_label: Uris
---
---

## What is an Uri?

A uri is binding between a publicly accessible url and a specific [page](pages.md) in your Clay instance. When your browsing the web you're generally navigating between human-readable URLs like www.vulture.com/movies/ or www.thecut.com/2018/08/baby-squirrel-attack-germany.html. But when you're creating and editing pages in Clay you're normally dealing with page instances with random ids, like www.thecut.com/_pages/cjko0bdjj008qi5ye57e00qyk.html. This is where uris come in.

_Uris are a bridge between a public facing url and a specific page instance_. When a page is published a public url for the page is determined ([see "Publishing" in Amphora docs](https://claycms.gitbook.io/amphora/basics/publishing)), and when that happens a uri is created.

---

## Anatomy of a Uri
A uri is the most simple data structure in Clay and follows the following pattern: `domain.com/_uris/:id`

The `:id` value for a uri is a _base64 encoded string of a public url **without the scheme**_. For example, if we're trying to find the uri that for https://www.vulture.com/movies/, we must simply base64 encode the  url without `https://` and we'll be able to find the specific uri: 
www.vulture.com/_uris/d3d3LnZ1bHR1cmUuY29tL21vdmllcy8=

If you follow that uri above, you'll see that it's value is simply a text string which points to a specific page, thus forming a bridge between a public url and a specific page instance.

---

## Redirects in Clay
But what happens if a page is published and then edited in such a way that changes the public url? Amphora handles the redirects for you!

If Amphora finds that a previously published page's public url is changing, a redirect will be made. Internally Amphora is changing the original uri to point to a new uri for the new public url. When a user requests the old url, Amphora will respond with a `301` status and redirect the user to the new url. Handling this internally allows editors to iterate on their content without already shared links losing their content.

---

## Request Lifecycle For Public Routes
When a request for www.vulture.com/movies/ comes into Clay, the following happens:

1. The url is base64 encoded without the scheme of the request, this forms the `id` of the uri.
2. A lookup for the specific uri is performed.
    * If it's a page instance, proceed
    * If it's another uri, redirect and restart the process
    * If it doesn't exist, send a `404` 
3. Proceed to compose the page and render it in the requested format
