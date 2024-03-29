## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying a pedagogical tool.

## Setup & Use

### Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- If you are using `yarn` or `pnpm`, adapt the `config/cli` in `package.json`
- Run command `npm install` (or equivalent using `yarn` or `pnpm`)
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters (**don't** delete them)

### Before you start

- To ensure compatibility and prevent conflicts, please consistently employ a **single** package manager: `npm`, `yarn`, or `pnpm`.

### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

The backend subdomain will be automatically created with the suffix -backend.
The global variable VITE_BACKEND_URL will be automatically created and pre-filled on the basis of this information.

Use this same tab to add the other environment variables required for the project if any.

READ ME :

Appellations {

.jsx = PascalCase
.css = camelCase

1 dossier =
HomePage.jsx
homePage.css
}

Structure HTML {

PAGE :

<main>
<section>
….
</section>
</main>

COMPONENTS :

<section>
…
</section>
}

GIT {

Rappel avant de coder quoique ce soit sur VSC, basculer sur la branche et faire un git pull, une fois terminé, basculer sur une nouvelle branche et on peut coder.

git commit -m “ “

> commit détaillé en anglais qui commence toujours par un verbe

git push

> toujours sur sa propre branche : origin nom-de -sa-branche

pull request

> toujours sur dev
> commentaire récapitulatif en anglais
> git pull
> Une fois la merge terminé,toujours effectuer le git pull sur la dev

git checkout -b

> Créer ensuite une nouvelle branche, basculer dessus et continuer à travailler.

}

STYLISATION {

Document CSS commun pour élément commun

usage de variables pour les couleurs et les fonts

}

Pense Bête :

Front END :

- Css : Faire des noms de classes explicites selon le modèle : className = main-title-header; en aucun cas faire un css sur des balises non classées ou identifiées, ex :
  p {

} --> Interdit

- Pour un component : Le coder en React, faire son css associé Smartphone ET Responsive.
- On n'installe pas de library sans informer le groupe et sans son aval.
