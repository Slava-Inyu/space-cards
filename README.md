# Space Cards

List of space cards.
Labels with numbers indicate element's render count.

## Set up

- `npm install`
- `npm run dev`

## Task

### Bugs:

- When a new card is appended in the beginning of the list - slide animation is shown for the last card instead 
- Scrollbar is touching cards on the right
 
### Improvements:

- Buttons should not be re-rendered when adding/removing items
- In `Button.tsx` change `theme` type from union to enum

## Bonus

- Prevent double render

## Additional Questions

- Can `CardList` re-renders be optimized?
- Why `getInitialState` is used?
- Deep vs shallow props comparison in `memo`
- What folder structure would you prefer as the project grows

