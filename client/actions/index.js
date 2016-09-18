import axios from 'axios';

import {
  ADD_LOCATION
} from './types';

const API_URL = '/api/iss';

export function pollIssPosition() {
  return function(dispatch) {
    axios.get(API_URL)
      .then(response => {
        dispatch({
          type: ADD_LOCATION,
          payload: response.data
        });
      })
  }
}