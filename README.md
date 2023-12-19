# Gvary Landing Page

Just a simple HTML + Bulma CSS webpage.

## How to build

Use Node v18 (Hydrogen).

```shell
npm run build
```

Deploy `dist/` folder to an S3 bucket.

## How to run dev server

To make live refresh work I had to comment out `postcss` plugin from `postcss.config.cjs`

After that is done, run:

```
npm run dev
```
