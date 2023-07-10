# 📦 React Modele Vite

Bienvenue dans ce modèle/template de projet React !

- Première utilisation
- Comment démarrer un projet ?
- Build du projet
- Utilitaires
- Dépendances
- Scripts
- Prérequis

## Objectif

Seul ce modèle ne sert pas à grand chose :
l'idée est de se _baser sur_ le modèle et de le faire tourner dans un autre projet.

Il suffit donc de le cloner dans le même dossier qui abritera vos projets.

On peut se baser sur lui pour :

- démarrer un **nouveau projet** avec un environnement fiable et configuré
- travailler sur un **challenge** avec des dossiers, des fichiers pré-existants

## Utilisation

Il s'agit essentiellement de copier/coller les parties intéressantes
du modèle dans le dossier du projet, sans écraser d'éventuels fichiers spécifiques.

Pour ce faire :

- rendez vous dans le dossier qui va contenir votre nouveau projet

  > le dossier `React-modele-vite` **doit** aussi s'y trouver

- lancer l'assistant pour récupérer le dépôt distant :

      ```sh
      cd dossier/avec/mes_challenges
      # Exemple : ../../../Spe-React

      # lancer le script
      ./React-modele-vite/bin/install.sh
      # si nécessaire, donner les droits à ce fichier :
      # `chmod +x ./React-modele-vite/bin/install.sh`
      # (un `sudo` peut être nécessaire)

      # renseigner soit :
      #   - le nom de votre nouveau projet (ex : my-app)
      #   - soit l'adresse SSH d'un dépôt Git (ex : git@github.com:O-clock-MA_PROMO/NOM_CHALLENGE.git)
      ```

- ou copier manuellement les dossiers et fichiers :

      ```sh
      # Exemple : après avoir cloné un challenge dans le dossier mon-challenge/

      # direction le dossier du challenge
      cd mon-challenge

      # copie des fichiers cachés et non-cachés présents à la racine du modèle
      # note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
      cp -n ../React-modele-vite/{.*,*} .

      # copie (récursive) des dossiers src/, config/ et public/
      # note : des alertes peuvent être affichées à propos de fichiers ignorés, c'est normal
      cp -rn ../React-modele-vite/{src,public} .

      # installation des dépendances listées dans le package.json
      yarn

      # lancement du serveur de dev
      yarn dev
      ```

## Build du projet

Le mode d'utilisation par défaut consiste à lancer un serveur de développement
avec la commande `yarn dev`.  
Dans ce cas tout est géré en mémoire :
on ne voit jamais le résultat concret du travail de Vite.

Vite peut toutefois produire une version concrète du projet
dans un dossier `dist/` avec la commande `yarn build`.

`build` permet de construire le projet pour la **production**
(version prête pour hébergement).

- assemblage des fichiers
- copie de fichiers
- nettoyage du code
- minification du code
- …

```sh
# dans le dossier du projet
cd mon-challenge

# build de production : les fichiers sont rassemblés *et optimisés*
yarn build
```

## Utilitaires

### Extensions VScode

Certaines extensions sont conseillées avec ce modèle ;
vous trouverez la liste dans le fichier `.vscode/extensions.js`.  
Dans ce dossier, vous trouverez aussi quelques recommendations de configuration
de VS Code.

#### ESLint

_Linter_ pour le JavaScript :
vous permet de trouver et de corriger (quelquefois automatiquement) des
erreurs dans votre code.

> <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

`ext install dbaeumer.vscode-eslint`

#### Prettier

_Code formatter_ :
impose un style cohérent en analysant votre code et en le réimprimant avec des règles configurées.

> <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

`ext install esbenp.prettier-vscode`

#### Error Lens

En combinaison avec EsLint et Prettier, renforce leur diagnostic et améliore
la lisibilité des erreurs et avertissements.

> <https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens>

`ext install usernamehw.errorlens`

#### Auto Rename Tag

Renomme automatiquement les balises HTML/JSX jumelées.

> <https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag>

`ext install formulahendry.auto-rename-tag`

#### Material Icon Theme

Fournit des icônes pour vos fichiers et dossier.

> <https://marketplace.visualstudio.com/items?itemName=pkief.material-icon-theme>

`ext install pkief.material-icon-theme`

#### Babel JavaScript

Coloration syntaxique améliorée pour ES6+.

> <https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel>

`ext install mgmcdermott.vscode-language-babel`

#### VScode Duplicate

Permet de dupliquer un fichier / dossier.

> <https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-duplicate>

`ext install mrmlnc.vscode-duplicate`

### Extension Navigateur React Dev Tools

- [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Extension Navigateur Redux Dev Tools

> <https://github.com/reduxjs/redux-devtools>

- [pour Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

## Principaux outils

- [Vite](https://vitejs.dev/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React](https://react.dev/)

### _Bundler_

Vite est un _bundler_ (_Task Runner_ ou _Builder_) ;
c'est un automatiseur de tâches :

- transpilation JS par Babel
- conversion Sass vers CSS
- optimisation du _build_

En mode développement, il s'appuie sur [esbuild](https://esbuild.github.io/) ;
tandis qu'il utilise [Rollup](https://rollupjs.org/) pour la production.

> [En savoir plus](https://vitejs.dev/guide/why.html)

### _Javascript compiler_

Pour transpiler du code ES2015+/JSX vers du JS ES5, Vite utilise
[Babel](https://babeljs.io/).

Appelé par le plugin `@vitejs/plugin-react`.

> Il est possible d'utiliser [SWC](https://swc.rs/) à la place
> grâce au plugin `@vitejs/plugin-react-swc`

### Linter

- [`eslint`](https://github.com/eslint/eslint) - ESLint, linter / analyseur de code JS.

- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Configuration Airbnb pour ESLint.

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Évite les éventuels conflits avec Prettier
  (le formateur de code).

- Plugins :
  - [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Considère Prettier comme une règle ESLint.
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Analyse les imports de fichiers.
  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - Analyse le code React.
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Analyse les hooks de React.
  - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Analyse l'accessibilité du JSX.

### Formateur de code

- [`prettier`](https://prettier.io/)

### React

- [`react`](https://github.com/facebook/react) - React.
  - [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom) - Permet d'injecter des composants React dans le DOM.

---

## Scripts

```sh
# Avec yarn
yarn {script}

# Avec npm
npm run {script}
```

- `dev` : lance le serveur de développement
- `build` : lance la construction de la version de production
- `preview` : permet de lancer un serveur pour visualiser le code après un _build_
- `lint` : lance ESLint
  - `lint:fix` : corrige les erreurs _auto-fixables_

## Prérequis (déjà présents sur la VM)

## Installer node

<details>
  <summary>Linux</summary>

**Ubuntu :**

```
sudo apt install nodejs
```

**Pour les autres distributions**, vérifier <https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions>

Ou <https://nodejs.org/en/download/package-manager/>

**Alternative via NVM**  
NVM est un outil permettant de gérer plusieurs installations de plusieurs versions de node

- [Installer NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Utiliser NVM](https://github.com/nvm-sh/nvm#usage)

</details>

<details>
  <summary>MacOS</summary>

- A télécharger directement sur <https://nodejs.org/en/>

Ou

- [Installer homebrew](https://brew.sh/)
- Puis node avec la commande `brew install node`

</details>

<details>
  <summary>Windows</summary>

- A télécharger directement sur <https://nodejs.org/en/>

Ou

- [Installer chocolatey](https://chocolatey.org/)
- Puis node avec la commande `choco install nodejs`

</details>

## Mettre à jour node

<details>
  <summary>Linux</summary>

**Méthode via npm**

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

**Si vous utilisez NVM**

- [Référez vous à l'utilisation de nvm](https://github.com/nvm-sh/nvm#usage)

</details>

<details>
  <summary>MacOS</summary>

- A télécharger directement sur <https://nodejs.org/en/>

Ou

**Méthode via npm**

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

</details>

<details>
  <summary>Windows</summary>

- A télécharger directement sur <https://nodejs.org/en/>

Ou

- Si vous utilisez [chocolatey](https://chocolatey.org/) `choco upgrade nodejs`

</details>

## Installer yarn

Suivre <https://classic.yarnpkg.com/en/docs/install/> en fonction de votre OS
