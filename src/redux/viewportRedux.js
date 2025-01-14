const SET_VIEWPORT_MODE = 'SET_VIEWPORT_MODE';

export const setViewportMode = mode => ({ payload: mode, type: SET_VIEWPORT_MODE });

export default function viewportReducer(state = 'desktop', action = {}) {
  switch (action.type) {
    case SET_VIEWPORT_MODE:
      return action.payload;
    default:
      return state;
  }
}
