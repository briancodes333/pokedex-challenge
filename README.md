# Brian Blattner's Pokedex Challange

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Getting Started

### Install Dependencies
```
yarn install or npm install
```

### Start Application
```
yarn start or npm run start
```

### Scripts Added
- lint (runs linter)
- lint:fix (runs linter and fixes)
- format (uses prettier to format code)


### Overview
This is an application that acts as a pokedex and uses the PokeAPI to gather data and feed to the views. From the main page, you can search for any pokemon, and the search filter will return the results in real time. You can click a tile and it will take you to the Pokemon detail page. Using the header, or back button you can return to the main page. Everytime a pokemon detail page is clicked, the selection is stored in the search history, which is visible from the main page.

### Main Business Requirements
- Use PokeAPI to gather data: DONE
- Able to search any Pokemon: DONE
- Able to see history of what has been searched: DONE

