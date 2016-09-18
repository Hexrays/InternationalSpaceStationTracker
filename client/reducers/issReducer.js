import {
  ADD_LOCATION
} from '../actions/types';

let nextLocationId = 0;

function addLocation(state = [], action) {
  switch(action.type){
    case ADD_LOCATION:
      return {
        location: {
          lat: action.payload.iss_position.latitude,
          lng: action.payload.iss_position.longitude
        },
        time: new Date(action.payload.timestamp * 1000).toLocaleString(),
        index: (nextLocationId++).toString()
      };

    default:
      return state;
  }
}

function issReducer(state = [], action) {
  switch(action.type) {
    case ADD_LOCATION:
      return [
      ...state,
      addLocation(state[action.payload.timestamp], action)
    ]
  };

  return state;
}

export default issReducer;