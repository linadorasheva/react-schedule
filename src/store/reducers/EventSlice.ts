import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent, IEventsInitialState, IGuest } from '../../types/event';

const initialState: IEventsInitialState = {
  guests: [],
  events: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setGuests(state: IEventsInitialState, action: PayloadAction<IGuest[]>) {
      state.guests = action.payload;
    },
    setEvents(state: IEventsInitialState, action: PayloadAction<IEvent[]>) {
      state.events = action.payload;
    },
  },
});

export default eventSlice.reducer;
