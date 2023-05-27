import { createSlice, configureStore } from "@reduxjs/toolkit";
const routerSliceInitialState = { url: "HOME", album: "", image: "" };
const routerSlice = createSlice({
  name: "router",
  initialState: routerSliceInitialState,
  reducers: {
    gotoPage(state, { payload }) {
      return payload;
    },
  },
});
const gallerySlice = createSlice({
  name: "gallery",
  initialState: [],
  reducers: {
    setGallery(state, { payload }) {
      return payload;
    },
  },
});
const store = configureStore({
  reducer: {
    router: routerSlice.reducer,
    gallery: gallerySlice.reducer,
  },
});
const routerActions = routerSlice.actions;
const galleryActions = gallerySlice.actions;
export { routerActions, galleryActions, store };
