## player-app

Will OTT media service website.

---
### Table of Contents

- [Requirements](#requirements)
- [Libs](#libs)
- [Clone](#clone)
- [Installation](#installation)
- [Development](#development)
- [Files](#files)
- [ToDo](#todo)
- [License](#license)

---
### Requirements

- [NodeJS v19.8.1](https://nodejs.org/en/)
- [PNPM 8.x](https://pnpm.io/)

---
### Libs

Technologies used
- [solidjs](https://docs.solidjs.com)
- [postcss](https://github.com/postcss/postcss)
- [Vitest](https://vitest.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org)
- [vanilla-extract-css](https://vanilla-extract.style/)

---
### Clone

- Clone repository: <br />
  `git clone https://github.com/iivanovw7/player-app.git` <br />

---
### Installation

- Install pnpm. <br />
  `npm install --global pnpm`
- Navigate into the application directory <br />
  `cd netflix-home` <br />
- Installing setup modules: <br />
  `pnpm run bootstrap` <br />

---
### Development

- Running in dev mode: <br />
  `pnpm run dev` <br />
- Create production build: <br />
  `pnpm run build` <br />
- Create production build with bundle analyzer report <br />
  `pnpm run build:analyze` <br />
- Create production build and run preview <br />
  `pnpm run build:view` <br />
- Serve last production build <br />
  `pnpm run view` <br />
- Run all linting <br />
  `pnpm run lint` <br />
- Lint `*.ts`, `*.tsx` project files: <br />
  `pnpm run lint-eslint` <br />
- Update simple git hooks after config changes <br />
  `pnpm run prepare` <br />
- Run all tests <br />
  `pnpm run test` <br />
- Run all tests with verbose logger mode <br />
  `pnpm run test --verbose` <br />
- Run all tests with coverage report <br />
  `pnpm run test:coverage` <br />
- Run all tests in watch mode <br />
  `pnpm run test:watch` <br />
- Complete reinstall <br />
  `pnpm run reinstall` <br />
- Create ne commit via `cz-git` <br />
  `pnpm run commit`
- Install package in a workspace <br />
  `pnpm install --save-dev -E unbuild --filter vite-config` <br />

---
### Files

Contains information about main configuration files and folders.

`./.nvmrc` -- contains current `Node.js` version.

`./assets` -- folder contains application resources (images, svg, fonts and etc...)

`./internal/ts-config` -- contains typescript configs.

`./internal/vite-config` -- contains vite config files.

`./src/**/*` -- main application folder.

`./src/main.tsx` -- entry point, renders application.

`./src/app` -- initializing the application (context, providers, etc...).

`./src/pages` -- contains application pages.

`./src/entities` -- contains business entities.

`./src/pages/routing` -- contains application routing config.

`./src/shared` -- reusable infrastructure code (UIKit, libs, API, ...).

`./src/widgets` -- complex page widgets, composing the underlying layers.

---
### ToDo
- ~~Base application structure.~~ <br/>
- ~~Setup vite for prod and dev, setup loaders and npm scripts.~~ <br/>
- ~~Setup linting~~ <br/>
- Test production view script. <br/>
- ~~Configure js/ts linter.~~ <br/>
- ~~Global spinner~~ <br/>
- Global loader ?? <br/>
- ~~Setup unit tests~~ <br />
- Setup integration tests <br />
- Setup e2e tests <br />
- Browse page: Header controls <br/>
- Browse page: Assets requests <br/>
- Browse page: Playable header <br/>
- Browse page: Base assets slider <br/>
- Browse page: Playable asset preview <br/>
- Player component & store <br />
- Browse page: Mobile version <br />
- Browse page: Mobile menu <br />

### License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2022 © <a href="https://github.com/iivanovw7/player-app" target="_blank">player-app</a>


