import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
} from "../actions";

const uiReducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };
    case SET_GRID_VIEW:
      return { ...state, isGridView: true, isListView: false };
    case SET_LIST_VIEW:
      return { ...state, isListView: true, isGridView: false };
    default:
      throw new Error("Action not found.");
  }
};

export { uiReducer };
