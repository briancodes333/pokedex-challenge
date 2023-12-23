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
This is an application that acts as a pokedex and uses the PokeAPI to gather data and feed to the views. From the main page, you can search for any pokemon, and the search filter will return the results in real time. You can click a tile and it will take you to the Pokemon detail page. Using the header, or back button you can return to the main page. Everytime a pokemon detail page is clicked, the selection is stored in the search history, which is visible from the main page. If your search returns no results, there is an empty state returned to the view. If the search input is blank, it will pull the first 15 pokemon in the list as a default state.

### Main Business Requirements
- Use PokeAPI to gather data: DONE
- Able to search any Pokemon: DONE
- Able to see history of what has been searched: DONE

### Bonus Points
- Added Pokemon detail page with additional metadata about the selected Pokemon
- Did my best to create an intuitive UI, with some basic styling with the time given

### Things I would add if I had if I kept working through this
- Better stying/UX: I focused more on making sure the logic was sound, and that everything worked as it should. If I was to spend more time on this, I would put a good amount of effort into coming up with a great design and layout. I would have loved to spent more time on the pokemon details page as well.
- Evolution chain: I really wanted to do this, but wanted to keep the time spent within the timeframe recommended (a few hours of work). If I was to fully finish this as an application that I would publish, I would defintely have added this feature.
- Add some test coverage: I typically like to add some test coverage to ensure the logic is sound and working as expected, but decided to skip this for this challenge due to time.


