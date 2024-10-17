import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllBooks, getBook, configure } from "../services/BookServices";

// Initial state
const initialState = {
  books: [],
  oneBook: [],
  status: "idle", // loading status
  error: null,
};

// // Async Thunks for API operations (optional: use if working with APIs)
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const books = await getAllBooks();
  //   console.log(books);
  return books;
});
export const singleBook = createAsyncThunk("books/singleBook", async (id) => {
  const books = await axios.get(
    `http://localhost:4000/api/books/${id}`,
    configure()
  );
  //   console.log(books.data.data);
  return books.data.data;
});

// // Create slice
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Non-async operations can be handled here if needed
  },
  extraReducers: (builder) => {
    // Handle async actions
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(singleBook.fulfilled, (state, action) => {
        state.oneBook = action.payload;
      });
  },
});

// Export reducer for store configuration
export default bookSlice.reducer;
export const fetchBookSlice = (state) => state.book;
// // s
// // 8.48 2017
// // top model petrol manual
