import { createSlice, configureStore } from "@reduxjs/toolkit";
const routerSliceInitialState = { url: "HOME", album: "" };
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
const imageGallerySlice = createSlice({
  name: "imageGallery",
  initialState: {},
  reducers: {
    setPhotos(state, { payload }) {
      return payload;
    },
  },
});
const store = configureStore({
  reducer: {
    router: routerSlice.reducer,
    gallery: gallerySlice.reducer,
    imageGallery: imageGallerySlice.reducer,
  },
});

const routerActions = routerSlice.actions;
const galleryActions = gallerySlice.actions;
const imageGalleryActions = imageGallerySlice.actions;
export { routerActions, galleryActions, imageGalleryActions, store };
