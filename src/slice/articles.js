import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articlesDetil: null,
  error: null,
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticleStart: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticleFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = true;
    },
    getArticlesDetilStart: (state) => {
      state.isLoading = true;
    },
    getArticlesDetilSuccess: (state, action) => {
      state.isLoading = false;
      state.articlesDetil = action.payload;
    },
    getArticlesDetilFailure: (state) => {
      state.isLoading = true;
    },
    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: (state) => {
      state.isLoading = false;
    },
    postArticleFailure: (state) => {
      state.isLoading = false;
      state.error = "Error";
    },
  },
});

export const {
  getArticleStart,
  getArticleSuccess,
  getArticleFailure,
  getArticlesDetilStart,
  getArticlesDetilSuccess,
  getArticlesDetilFailure,
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
} = articleSlice.actions;
export default articleSlice.reducer;
