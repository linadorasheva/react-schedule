import React, { FC, useEffect, useState } from 'react';
import EventCalendar from '../../components/EventCalendar/EventCalendar';
import EventForm from '../../components/EventForm/EventForm';
import CustomModal from '../../components/Modal/CustomModal';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { eventActionCreators } from '../../store/ActionCreators';
import { IEvent } from '../../types/event';

const EventsPage: FC = () => {
  const [isModalAddEventVisible, setIsModalAddEventVisible] = useState(false);

  const dispatch = useTypedDispatch();
  const { guests, events } = useTypedSelector((state) => state.eventReducer);
  const { user } = useTypedSelector((state) => state.authReducer);

  useEffect(() => {
    if (user.username) {
      dispatch(eventActionCreators.fetchEvents(user.username));
    }
  }, [user.username]);

  useEffect(() => {
    dispatch(eventActionCreators.fetchGuests());
  }, []);

  const addNewEvent = (event: IEvent) => {
    dispatch(eventActionCreators.createEvent(event));
    setIsModalAddEventVisible(false);
  };

  return (
    <div className="events-page page">
      <h1 className="page__title">Events page</h1>
      <div className="events-page__content">
        <EventCalendar events={events} />
        <button
          onClick={() => setIsModalAddEventVisible(true)}
          type="button"
          className="events-page__add-event"
        >
          <span className="events-page__btn-text">New</span>
        </button>
        <CustomModal
          title="Добавить событие"
          open={isModalAddEventVisible}
          onCancel={() => setIsModalAddEventVisible(false)}
          footer={null}
        >
          <EventForm guests={guests} submit={(event) => addNewEvent(event)} />
        </CustomModal>
      </div>
    </div>
  );
};

export default EventsPage;
