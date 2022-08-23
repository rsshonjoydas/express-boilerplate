[![Facebook-Page][facebook-shield]][facebook-url]
[![Twitter][twitter-shield]][twitter-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">Next Boilerplate
  <div align="center"><h3>Project Link: <a href="https://github.com/rsshonjoydas/express-boilerplate">GitHub</a> or <a href="https://codesandbox.io/s/github/rsshonjoydas/express-boilerplate/tree/main">CodeSandbox</a></h3></div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [How to run](#how-to-run)
- [Manual Setup](#manual-setup)
- [Contact](#contact)

<!-- HOW TO RUN -->

## How to run

Please follow the below instructions to run this project in your computer:

1. Clone this repository
   ```sh
   git clone git@github.com:rsshonjoydas/express-boilerplate.git
   ```
2. Install this project using yarn

   ```
   yarn install
   ```

3. Your app should be available in http://localhost:5000

## Manual Setup

1.  Project Initialize

    - Project Initialize

      ```sh
      yarn init -y
      ```

    - Install Express JS and dotenv packages

      ```sh
      yarn add express dotenv
      ```

    - Install TypeScript and nodemon packages

      ```sh
      yarn add -D @types/express \
                  @types/node \
                  nodemon \
                  ts-node \
                  tsc \
                  typescript
      ```

    - Add this configuration to your project tsconfig.json

      ```json
      {
        "compilerOptions": {
          "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */,
          "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
          "lib": ["DOM", "ES2017"] /* Specify library files to be included in the compilation. */,
          "sourceMap": true /* Generates corresponding '.map' file. */,
          "outDir": "./dist" /* Redirect output structure to the directory. */,
          "rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
          "strict": true /* Enable all strict type-checking options. */,
          "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
          "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
          "skipLibCheck": true /* Skip type checking of declaration files. */,
          "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
        },
        "exclude": ["node_modules"],
        "include": ["./src"]
      }
      ```

    - Finally, let's set up package in the `package.json file so that it runs Prettier on JS files:
      ```sh
      "scripts": {
        "start": "node ./dist/server.js",
        "watch": "tsc -w",
        "dev": "nodemon -L ./src/server.ts && watch"
      },
      ```

2.  Engine Locking configuration (optional)

    - Create .npmrc file and add below the code

      ```sh
      engine-strict=true
      ```

    - Create .nvmrc file and add below the code

      ```sh
      lts/fermium
      ```

    - Add this configuration to your project package.json

      ```json
      "engines": {
         "node": ">=14.0.0",
         "yarn": ">=1.22.0",
         "npm": "please-use-yarn"
       }
      ```

3.  Airbnb style guide setup

    - Install those packages in devDependencies

      ```sh
      yarn add -D eslint-config-airbnb-base \
                  eslint-config-airbnb-typescript \
                  @typescript-eslint/eslint-plugin@^5.13.0 \
                  @typescript-eslint/parser@^5.0.0 \
                  eslint \
                  prettier \
                  eslint-plugin-prettier \
                  eslint-config-prettier \
                  eslint-plugin-node \
                  eslint-config-node \
                  eslint-plugin-import
      ```

    - We need to add some configuration to a file named .eslintrc.json like this:

      ```json
      {
        "env": {
          "browser": true,
          "es2021": true,
          "node": true
        },
        "extends": ["airbnb-base", "prettier"],
        "overrides": [],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
          "ecmaVersion": "latest",
          "sourceType": "module"
        },
        "plugins": ["prettier"],
        "rules": {
          "prettier/prettier": "error",
          "no-unused-vars": "error",
          "no-underscore-dangle": "off",
          "no-console": "warn",
          "func-names": "off",
          "prefer-const": "off",
          "no-param-reassign": "off",
          "no-return-await": "off",
          "max-classes-per-file": "off",
          "class-methods-use-this": "off",
          "import/prefer-default-export": "off",
          "import/no-unresolved": "off",
          "import/extensions": "off",
          "linebreak-style": "off"
        }
      }
      ```

    - We need to add some configuration to a file named .prettierrc like this:

      ```json
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "jsxSingleQuote": true,
        "printWidth": 100,
        "tabWidth": 2,
        "semi": true,
        "endOfLine": "auto"
      }
      ```

    - We need to add some configuration to a file named .prettierignore like this:
      ```sh
      .yarn
       yarn.lock
       .github
       .next
       next-env.d.ts
       out
       dist
       public
       node_modules
      ```

4.  Git hooks and husky

    - Install configuration packages in your devDependencies

      ```sh
      yarn add -D @commitlint/cli \
                  @commitlint/config-conventional \
                  husky \
                  lint-staged \
                  validate-branch-name
      ```

    - We need to add some configuration to a file named commitlint.config.js like this:

      ```js
      module.exports = {
        extends: ['@commitlint/config-conventional'],
        rules: {
          'type-enum': [
            2,
            'always',
            [
              'build',
              'chore',
              'ci',
              'docs',
              'feat',
              'fix',
              'perf',
              'refactor',
              'revert',
              'style',
              'test',
              'docker',
            ],
          ],
        },
      };
      ```

    - We also need to enable the husky hooks:

      ```sh
        yarn husky install
      ```

    - Finally, let's set up lint-staged in the `package.json file so that it runs Prettier on JS files:

      ```json
      {
        "scripts": {
          "prepare": "husky install"
        },
        "lint-staged": {
          "**/*.{ts,js}": "prettier --write --ignore-unknown"
        }
      }
      ```

    - Now that we are done installing husky, we need to add a pre-commit hook to run before the code is committed.

      ```sh
      yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
      yarn husky add .husky/pre-commit "yarn validate-branch-name"
      yarn husky add .husky/pre-commit "yarn lint-staged"
      yarn husky add .husky/pre-commit "yarn test"
      ```

    - Now that we are done installing husky, we need to add a pre-push hook to run before the code is pushed.

      ```sh
      yarn husky add .husky/pre-push "yarn build"
      ```

###### Git commit message

> feat, fix, docs, style, refactor, test, chore, perf, ci, build and temp.

| Type     | Description                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| feat     | A new feature.                                                                                          |
| fix      | A bug fix.                                                                                              |
| docs     | Documentation only changes.                                                                             |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc). |
| refactor | A code change that neither fixes a bug nor adds a feature.                                              |
| test     | Adding missing tests or correcting existing ones.                                                       |
| chore    | Changes to the build process or auxiliary tools and libraries such as documentation generation.         |
| perf     | A code change that improves performance.                                                                |
| ci       | Changes to your CI configuration files and scripts.                                                     |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).    |
| temp     | Temporary commit that won't be included in your CHANGELOG.                                              |

- scope:
  Optional, can be anything specifying the scope of the commit change.
  For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.  
   In App Development, scope can be a page, a module or a component.

- subject:
  Brief summary of the change in present tense. Not capitalized. No period at the end.

###### Skipping Hooks

In the terminal, you can bypass hooks by adding the --no-verify option, like in this example:

```sh
git commit -m "skipping hooks" --no-verify
```

  <!-- CONTACT -->

## Contact

Shonjoy Das - [rsshonjoy@gmail.com](mailto:rsshonjoy@gmail.com)

<!-- MARKDOWN LINKS & IMAGES -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor
[facebook-url]: https://facebook.com/rsshonjoydas
[twitter-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=twitter&color=555&logoColor
[twitter-url]: https://twitter.com/rsshonjoydas
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor
[instagram-url]: https://instagram.com/rsshonjoydas
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB
[linkedin-url]: https://linkedin.com/in/rsshonjoydas
