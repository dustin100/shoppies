This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## UX Developer Intern & Web Developer Intern Challenge - Winter 2021

- Live link: https://dustin100.github.io/shoppies/

### The Shoppies: Movie awards for entrepreneurs

Shopify has branched out into movie award shows and we need your help. Please build us an app to help manage our movie nominations for the upcoming Shoppies.

### The Challenge

We need a webpage that can search OMDB for movies, and allow the user to save their favorite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:

- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list

### Technical requirements

- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
  If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

### Improvements

- Update cart to show current number of nominations
- Animation when adding a new movies to cart
- Sliding animation for switching pages
- Disable all add/remove buttons when user hits 5 nominations
- Convert classes to hooks

### Bug Fixes

- Warning: Hash history cannot PUSH the same path
- Warning: Can't perform a React state update on an unmounted component.
