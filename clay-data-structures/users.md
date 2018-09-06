# Users

Users are a relatively simple data structure and simply allow content creators and editors to log into Clay to work with content. A user object is structured accordingly: 

```javascript
{
    "username": <USERNAME SPECIFIC TO YOUR AUTH PROVIDER>,
    "auth": <"write" OR "admin">,
    "provider": <NAME OF AUTHENTICATION PROVIDER>
}
```

Clay uses [PassportJS](http://www.passportjs.org/) for authentication and currently supports the following providers:

* Google
* Twitter
* Slack
* LDAP
* Authentication Token

A provider is defined at startup time and more information can be found in those docs for how to configure each provider. Assuming we have a provider of `google` configured, let's look at the following user object:

```javascript
Found at: /_users/dXNlckBnb29nbGUuY29tQGdvb2dsZQ==

{
    "username": "user@google.com",
    "auth": "admin",
    "provider": "google"
}
```

The user's id is a Base64 encoded string of the `<username>@<provider` and the authentication level is used to define permissions when editing content via [Kiln](https://claycms.gitbook.io/kiln).

