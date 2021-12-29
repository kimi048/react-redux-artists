import {
  GET_ARTISTS_ALL,
  GET_ARTISTS_SEARCH
} from "../types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ARTISTS_ALL:
      return { ...state, artistList: action.payload }
    case GET_ARTISTS_SEARCH:
      return { ...state, artistList: action.payload }
    default:
      return state;
  }
}