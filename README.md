## player-app

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Netlify Status](https://api.netlify.com/api/v1/badges/570e136e-4a9e-4fcd-b73d-db6f0fbd66ab/deploy-status)](https://app.netlify.com/sites/netlify-express/deploys)

In development. Will contain OTT media service website.

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
- [nvm](https://github.com/nvm-sh/nvm) (*optional*)

#### Secrets

Should have `.env` file in root folder with [TMDB](https://www.themoviedb.org/) access token.
```bash
TMDB_TOKEN='TMDB_TOKEN'
```

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

`git clone https://github.com/iivanovw7/player-app.git` <br />

---
### Installation

- Install pnpm. <br />
  `npm install --global pnpm`
- Navigate into the application directory <br />
  `cd player-app` <br />
- Setup node version manager environment <br />
  `nvm use` (or `nvm install`)
- Pre-install script <br />
  `npm run preinstall` <br />
- Installing setup modules: <br />
  `pnpm run bootstrap` <br />
- Post-installing scripts: <br />
  `pnpm run postinstall` <br />
- Update / setup git hooks <br />
  `pnpm run prepare` <br />

---
### Development

[Commitizen](https://github.com/commitizen/cz-cli) configuration

#### Development Workflow

1. [feature-branch] Stage modified files using `git add .`.
2. [feature-branch] Commit the files using git-cz package `git commit` (should trigger `git-cz` via hook).
   1. Choose the type of the commits (feat, refactor, fix, etc.).
   2. Provides a short description of the commits.
   3. (Optional) Provides a longer description.
   4. Determine whether the commit is a BREAKING CHANGES or not (by answering ‘y’ and fill up BREAKING CHANGES descriptions in the CLI).
   5. (Optional) Mentions the JIRA issue in (by answering ‘y’ and fill up the issue descriptions in the CLI).
3. [feature-branch] Push remote branch `git push origin <feature-branch>`.
4. Create a Pull Request to dev branch.

- Running in dev mode: <br />
  `pnpm run dev` <br />
- Running dev rest server (required for dev & view) <br />
  `pnpm run dev:test-server` <br />

  test user credentials
  ```typescript
    username: 'user@email.com'
    password: 'user'
  ```
- Generate typedoc documentation inside `./build/docs` folder <br />
  `pnpm doc` <br />
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
  `pnpm test -- --reporter='verbose'` <br />
- Run all tests with coverage report <br />
  `pnpm run test:coverage` <br />
- Run all tests in watch mode <br />
  `pnpm run test:watch` <br />
- Complete reinstall <br />
  `pnpm run reinstall` <br />
- Create ne commit via `cz-git` <br />
  `pnpm run commit` <br />
- Install package in a workspace <br />
  `pnpm install --save-dev -E unbuild --filter vite-config` <br />

#### Localization

Localization messages location patterns:
- `src/[Layer]/lib/messages`
- `src/shared/translations/common.ts`

##### Localization scripts

- Extract messages and puts them into temp `src/shared/translations/lang.json` file <br />
  `extract-messages` <br />
- Compiles messages and into temp `src/shared/translations/[Locale].json` file <br />
  `compile-messages` <br />
- Combined localizations script with cleanup <br />
  `create-translations` <br />

---
### Files

Contains information about main configuration files and folders.

| Folder                     | Comment                                                               |
|:---------------------------|:----------------------------------------------------------------------|
| `./.nvmrc`                 | Contains current `Node.js` version.                                   |
| `./assets`                 | Folder contains application resources (images, svg, fonts and etc...) |
| `./apps/test-rest-server`  | Contains rest server with stubs.                                      |
| `./internal/ts-config`     | Contains typescript configs.                                          |
| `./internal/vite-config`   | Contains vite config files.                                           |
| `./internal/eslint-config` | Run ESLint and report styling error                                   |
| `./src/**/*`               | Main application folder.                                              |
| `./src/main.tsx`           | Entry point, renders application.                                     |
| `./src/app`                | `Layer` Initializing the application (context, providers, etc...).    |
| `./src/pages`              | `Layer` Contains application pages.                                   |
| `./src/pages/routing`      | Contains application routing config.                                  |
| `./src/entities`           | `Layer` Contains business entities.                                   |
| `./src/shared`             | `Layer` Reusable infrastructure code (UIKit, libs, API, ...).         |
| `./src/widgets`            | `Layer` Complex page widgets, composition of Entities and Features.   |                        |
| `./src/features`           | `Layer` Elements that enable users to use this feature.               |

---
### ToDo
- ~~Base application structure.~~ <br/>
- Add locale switcher <br />
- ~~Setup vite for prod and dev, setup loaders and npm scripts.~~ <br/>
- ~~Setup linting~~ <br/>
- Add locale support <br />
- Remove <Img /> `size` property <br />
- Test production view script. <br/>
- Add graphql test server <br />
- Restore playable banner component <br />
- Setup components unit tests <br />
- Setup test dedicated lint config <br />
- ~~Configure js/ts linter.~~ <br/>
- ~~Global spinner~~ <br/>
- Global loader ?? <br/>
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
- Copyright 2023 © <a href="https://github.com/iivanovw7/player-app" target="_blank">player-app</a>


