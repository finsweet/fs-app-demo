# Finsweet App Demo

## About

This is the codebase for the [Fs App Demo](https://fs-app-demo.webflow.io/), created to demonstrate some basic implementations of an app in Webflow.

The app is very minimal and barebones: no fancy styles, API calls are mocked, interactivity is limited.

## Features

- Render data on static elements.
- Render lists.
- Display skeleton loaders while awaiting for the API responses. All components are handled independently without waterfalls.
- Dynamic template page (tickets) using query parameters.

## References

- [Webflow Published App](https://fs-app-demo.webflow.io/)
- [Webflow Designer](https://preview.webflow.com/preview/fs-app-demo?utm_medium=preview_link&utm_source=designer&utm_content=fs-app-demo&preview=fb7d76bc598b7b2b075ecda7b240141d&workflow=preview)
- [Developer Starter](https://github.com/finsweet/developer-starter/)

## CI/CD

This codebase follows the same CI/CD pipeline as our [Developer Starter](https://github.com/finsweet/developer-starter/), all code is checked and tested in every PR and deployed to npm once merged into `master`.
