import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTickets } from '../api/fakeApi';

export const fetchTicketsThunk = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    const data = await fetchTickets();
    return data;
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTicketsThunk.fulfilled, (state, action) => {
        state.tickets = action.payload;
        state.loading = false;
      })
      .addCase(fetchTicketsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});

export default ticketsSlice.reducer;