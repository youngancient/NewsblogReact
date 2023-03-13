
<h1 align="center">
  newsblogreact
</h1>

<p align="center">
  <a href="https://newsblogarticle.netlify.app/">
    Live Preview
  </a>
</p>


## Folder Structure

No configuration or complicated folder structures, just the files you need to build your app:

```
My vite-template-react
├── node_modules
├── public
│   ├── favicon.svg
│   └── assets
      ├── images,svgs
└── src
    ├── Components
       ├── All-components
    ├── Utils
        ├── Data-utils
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/SafdarJamal/vite-template-react.git
cd newsblogreact
```

Make it your own:

```
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm start
```

And then open http://localhost:3000 to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |

## Credits

Vite Template React is built and maintained by [Safdar Jamal](https://safdarjamal.github.io).
