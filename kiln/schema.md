# Component Schemas

Component schemas dictate a component's description and fields.

## Description
Every component can (and should) have a root-level `_description` in its schema, which contains markdown-formatted text describing the purpose and use of the component. Descriptions look like this:

```yaml
_description: |
  A short description of the component.

  A more detailed overview of functionality and business use cases, intended
  for an audience of writers, editors, and other CMS end users. It may include:

  * plain english descriptions of any non-obvious functionality
  * suggested workflows and advanced features
  * non-obvious interactions with other components
```

Descriptions will appear in Kiln when users click/tap the `info` icon in components' mini-selector.

### Developer Description

If the component has information that's useful for developers, but not end users, add a root-level `_devDescription`. It works the same as `_description`, but will not display in Kiln (only in component README files).

```yaml
_description: |
  A more detailed overview of functionality, maintenance information, and
  developer/designer use cases, intended for an audience of devs, designers,
  and product managers. It may include:

  * lists of workflows, functional requirements, business justifications
  * intentions of the author and situations that are explicitly unsupported
  * developer-focused information on certain fields that's not appropriate for user-facing field descriptions
```

## Version
Version numbers are used by [Amphora](https://github.com/clay/amphora) to determine whether or not the component's data needs to be [updated](https://github.com/clay/amphora/wiki/Component-Data-Versioning).

## Fields
Fields defined in the schema are editable by users via Kiln and correspond to properties of the component data. For example, if in the schema, there is a "title" field, the component data will have a "title" property.

component schema:
```yaml
title:
  _label: Title
  _has: ...
```

component JSON data:
```json
{
  title: ''
}
```

 [Fields](kiln/fields.md) can be sorted into groups of other fields and you can define what kind of form opens when the user edits this field. Lastly fields comprise of *behvaiors*, self-contained logic and templates that determine how the field renders in edit mode and what kind of data should be entered in the field.
