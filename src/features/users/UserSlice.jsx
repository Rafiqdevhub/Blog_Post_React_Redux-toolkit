import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Muhammad Rafiq" },
  { id: "1", name: "Sanan Khan" },
  { id: "2", name: "Samshaad Khan" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
