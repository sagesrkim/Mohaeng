import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalSlice";
import tokenReducer from "./reducers/loginTokenSlice";
import nickNameReducer from "./reducers/loginTokenSlice";
import emailReducer from "./reducers/loginTokenSlice";
import idReducer from "./reducers/loginTokenSlice";
import profileUrlReducer from "./reducers/loginTokenSlice";
import CourseFormSlice from "./reducers/CourseFormSlice";
import FilterSlice from "./reducers/FilterSlice";
import CourseSlice from "./reducers/CourseSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    token: tokenReducer,
    nickName: nickNameReducer,
    email: emailReducer,
    id: idReducer,
    profileUrl: profileUrlReducer,
    course: CourseSlice,
    courseForm: CourseFormSlice,
    filter: FilterSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
