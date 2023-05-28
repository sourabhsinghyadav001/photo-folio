# Read before you examine!

All info about the project is given in this readme file, after reading this file the code is assumed to be self-explanatory.

## Notes:

- The new items are added in list according to alphabetical order.
- The app relies on onSnapshot for updating state.
- The app uses Duplicate local state for filtering of content on search of images.

## Packages used

- Redux toolkit: for global control state like middle button click, mouse rotate gesture, page to be routed.
- react-toastify: for displaying messages.
- react-bootstrap: for spinner in loading phase.

## CSS

- used css modules
- made separate components for reccuring components like Input and Button.
- Made custom carousel.

## Components

- The Gallery Components for album Gallery and photo gallery.
- Reusable Input and Button Component.
- Navbar component
- carousel component for editing images

## Routing and the Router Component.

- I have NOT used react router!
- I implemented my own router!
- The Router component returns JSX according to the page-id.
- The App.js just uses redux state to detect change in the router page-id.
