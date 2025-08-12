import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTickets } from '../api/fakeApi';

export interface Ticket {
  id: string;
  price: number;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: number; // в минутах
  stops: number;
}

interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: null,
};

export const fetchTicketsThunk = createAsyncThunk(
  'tickets/fetchTickets',
  async () => {
    const data = await fetchTickets();
    return data;
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
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
        state.error = action.error.message || 'Error fetching tickets';
      });
  },
});

export default ticketsSlice.reducer;