import { createSlice } from "@reduxjs/toolkit";

export interface content {
  placeId: number;
  name: string;
  firstImage: string;
  contentId: string;
  isBookmarked: boolean;
  averageRating: number;
  reviewTotalElements: number;
}

export interface SearchPlaceState {
  contents: content[];
  totalPages: number;
  totalElements: number;
}

const initialState: SearchPlaceState = {
  contents: [],
  totalPages: 0,
  totalElements: 0,
};

export const searchPlaceSlice = createSlice({
  name: "searchPlace",
  initialState,
  reducers: {
    setSearchPlace: (state, action) => {
      state.contents = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.totalElements = action.payload.totalElements;
    },
  },
});

export const { setSearchPlace } = searchPlaceSlice.actions;
export default searchPlaceSlice.reducer;
