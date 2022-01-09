<p align="center">
  <img src="https://ucarecdn.com/fd864090-2003-4195-8d7a-43cd137b4779/ScreenShot20220109at121047.webp" alt="Spacestagram: Image-sharing from the final frontier">
</p>

<br />

<div align="center"><strong>Shopify Front End Developer Intern Challenge - Summer 2022</strong></div>
<div align="center">Crafted by <a href="https://kxlaa.com/" target="_blank">Kola</a></div>
<br />

<div align="center"><a href="https://shopify-fe-challenge.vercel.app/" target="_blank"><strong>LIVE SITE HERE</strong></a></div>

<br />

## Technologies

- ⚡️ Next.js & React for the Front End
- ⛑ TypeScript as the programming language
- 💅🏿 Styled-Components for styling
- ⌘ Apollo Client for data fetching
- ✨ Apollo Server & GraphQL on the backend
- 👷🏿‍♀️ GraphQL Code Generator to generate types from GraphQL Schema

<br />

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result. You may need to provide an `API_KEY` in a `.env` file to see data lod up on a page. Get your `API_KEY` <a href="https://api.nasa.gov/" target="_blank">here</a>.

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.
