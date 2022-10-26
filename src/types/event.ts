import { IUser } from './user';

export interface IEvent {
  author: string;
  guest?: string;
  date: string;
  title: string;
  description: string;
}

export interface IGuest extends IUser {
  id: string;
}

export interface IEventsInitialState {
  guests: IGuest[];
  events: IEvent[];
}

export interface IEventCalendarProps {
  events: IEvent[];
}

export interface IEventFormProps {
  guests: IGuest[];
  submit: (event: IEvent) => void;
}
