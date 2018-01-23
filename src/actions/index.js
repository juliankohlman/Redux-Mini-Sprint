export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENTIFODD = 'INCREMENTIFODD';
// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
   // Fill in this function
   // payload is a part of package: packet-obj same thing
   // payload ==> data in addition to the type if there is any
   return {
    type: 'INCREMENT'
   }
};

export const incrementIfOdd = () => {
  return {
    type: 'INCREMENTIFODD'
  }
}


export const decrement = () => {
   // Fill in this function
   return {
    type: 'DECREMENT'
   }
};