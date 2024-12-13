import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters', // Action type
  async (params) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?limit=10&page=${params.offset}`);
    const data = await response.json(); 
    return data.results;
  }
);

const charSlice = createSlice({
  name: 'karakterler',
  initialState: {
    data: [], 
    status: 'idle', 
    error: null, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default charSlice.reducer;
