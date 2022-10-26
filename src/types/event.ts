import { Moment } from 'moment';
import { IUser } from './user';

export enum EventStatusNamesEnum {
  'warning' = 'Средний',
  'success' = 'Обычный',
  'error' = 'Важный',
  'default' = 'Без статуса',
}

export enum EventStatusEnum {
  'warning' = 'warning',
  'success' = 'success',
  'error' = 'error',
  'default' = 'default',
}
export interface IEvent {
  author: string;
  guest?: string;
  date: string;
  title: string;
  description: string;
  status: EventStatusEnum;
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

export interface IEventsListProps {
  event: IEvent;
}
