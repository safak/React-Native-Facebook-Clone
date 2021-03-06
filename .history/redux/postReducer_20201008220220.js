import postActionTypes from "./postActionTypes";
import { postArray } from "../DummyData";

const initiaState = {
  posts: postArray,
};

const postReducer = (state = initiaState, action) => {
  switch (action.type) {
    case postActionTypes.ADD_NEW_POST:
      return {
        posts: [initiaState.posts],
      };
    default:
      return state;
  }
};

export default postReducer;
