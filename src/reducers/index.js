import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases,
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do the count in each case?

export default (count = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            // Fill in the body of this case
            // NOTE count + 1 and not count += 1 because reducers should NEVER mutate their arguments
          return count + 1;
        case DECREMENT:
            // Fill in the body of this case
          return count - 1;
        default:
          return count;
    }
};